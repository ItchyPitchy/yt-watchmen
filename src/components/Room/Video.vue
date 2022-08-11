<script lang="ts">
  import { defineComponent, inject, type PropType } from "vue";
  import type { Store } from "@/main";
  import type { Room } from "../Rooms/Rooms.vue";

  interface Player {
    loadVideoById: (videoId: string, startSeconds?: number) => void,
    getPlayerState: () => PlayerState,
    pauseVideo: () => void,
    seekTo: (seconds: number, allowSeekAhead?: boolean) => void,
    getCurrentTime: () => number,
    playVideo: () => void,
    setPlaybackRate: (suggestedRate: number) => void,
  }

  enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    VIDEO_CUED = 5,
  }

  interface State {
    player: Player | null,
    // updateTimeIntervalId: number | null,
  }

  export default defineComponent({
    setup() {
      return {
        store: inject('store') as Store,
      }
    },
    data(): State {
      return {
        player: null,
        // updateTimeIntervalId: null,
      }
    },
    props: {
      room: {
        type: null as unknown as PropType<Room | null>,
        required: true,
      }
    },
    emits: ['player-ready', 'player-state-change', 'player-playback-rate-change'],
    watch: {
      'room': {
        handler(newRoomValue: Room, oldRoomValue: Room | null) {
          if (newRoomValue.videoId !== oldRoomValue?.videoId && newRoomValue.videoId !== null) this.player?.loadVideoById(newRoomValue.videoId, newRoomValue.time)

          // TODO: this is not working properly (dunno why)

          // if (newRoomValue.host === this.store.auth.userId) {
          //   if (this.updateTimeIntervalId === null) {
          //     this.updateTimeIntervalId = setInterval(() => {
          //       const roomRef = ref(db, `rooms/${this.roomId}`)

          //       update(roomRef, {
          //         time: this.player?.getCurrentTime()
          //       })
          //     }, 5000)
          //   }
          // } else {
          //   if (this.updateTimeIntervalId !== null) {
          //     clearInterval(this.updateTimeIntervalId)
          //     this.updateTimeIntervalId = null
          //   }
          // }

          // Only react to room player updates if your not the host
          if (newRoomValue.host !== this.store.auth.userId) {

            console.log(newRoomValue.host, this.store.auth.userId)
            console.log("state", newRoomValue)

            if (oldRoomValue) {
              // Only seek to specific progress if state is not paused,
              // this to prevent calling seek event when host is just draggin the progress bar
              // if (newRoomValue.state !== "paused") {
              //   if (Math.abs(newRoomValue.time - oldRoomValue.time) > 5) this.player?.seekTo(newRoomValue.time, true)
              // }
            }

            if (newRoomValue.state !== oldRoomValue?.state) {
              switch(newRoomValue.state) {
                case "playing": {
                  this.player?.playVideo()
                  this.player?.seekTo(newRoomValue.time, true)
                  break
                }
                case "paused": {
                  this.player?.pauseVideo()
                  break
                }
                default: {
                  break
                }
              }
            }

            if (newRoomValue.rate !== oldRoomValue?.rate) this.player?.setPlaybackRate(newRoomValue.rate)
          }
        }
      },
    },
    beforeCreate() {
      window.onYouTubeIframeAPIReady = () => {
        this.initYoutube()
      }
    },
    mounted() {
      // This code loads the IFrame Player API code asynchronously.
      const exists = document.getElementById('youtubeIframeApi')

      if (!exists) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api"
        tag.id = 'youtubeIframeApi'
        const firstScriptTag = document.getElementsByTagName('script')[0] as HTMLScriptElement
        firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag)
      } else {
        this.initYoutube()
      }
    },
    methods: {
      initYoutube() {
        const player = new window.YT!.Player('player', {
          height: '100%',
          width: '100%',
          videoId: null,
          playerVars: {
            'autoplay': 0,
            'playsinline': 1,
            'enablejsapi': 1,
            'modestbranding': 1,
          },
          events: {
            "onReady": this.onPlayerReady,
            "onStateChange": this.onPlayerStateChange,
            "onPlaybackRateChange": this.onPlayerPlaybackRateChange,
            "onError": (e: any) => console.log("error", e),
          },
        });

        this.player = player
      },
      async onPlayerReady() {
        this.$emit('player-ready')
      },
      onPlayerStateChange(event: { data: number }) {
        if (event.data === PlayerState.BUFFERING) return

        if (this.store.auth.userId === this.room?.host) {
          if (event.data === PlayerState.PLAYING) {
            this.$emit('player-state-change', {
              state: "playing",
              time: this.player?.getCurrentTime()
            })
          } else if (event.data === PlayerState.PAUSED) {
            this.$emit('player-state-change', {
              state: "paused",
              time: this.player?.getCurrentTime()
            })
          }
        }
      },
      onPlayerPlaybackRateChange(event: { data: number }) {
        this.$emit('player-playback-rate-change', {
          rate: event.data,
        })
      },
    }
  })
</script>

<template>
  <div id="player"></div>
</template>
