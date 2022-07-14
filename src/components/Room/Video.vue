<script lang="ts">
  import { getDatabase, onValue, ref, set } from "@firebase/database";
  import { defineComponent } from "vue";

  const db = getDatabase()

  export default defineComponent({
    data() {
      return {
        player: null,
        videoUrlInput: "",
        done: false,
      }
    },
    created() {
      window["onYouTubeIframeAPIReady"] = () => {
        this.initYoutube()
      }

      const roomRef = ref(db, `rooms/${this.roomId}/videoId`)

      onValue(roomRef, (snapshot) => {
        const room = snapshot.val()

        console.log(room)
      })
    },
    computed: {
      roomId() {
        return this.$route.params.id
      },
    },
    watch: {
      'roomId': {
        handler(toId) {
          console.log("toParams", toId)
        },
      }
    },
    mounted() {
      // 2. This code loads the IFrame Player API code asynchronously.
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    },
    methods: {
      initYoutube() {
        const player = new window["YT"].Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange,
          },
        });

        this.player = player
      },
      onPlayerReady(event) {
        event.target.playVideo()
      },
      onPlayerStateChange(event) {
        if (event.data == window["YT"].PlayerState.PLAYING && !this.done) {
          setTimeout(this.stopVideo, 6000)
          this.done = true
        }
      },
      stopVideo() {
        this.player.stopVideo();
      },
      async loadVideo() {
        const url = new URL(this.videoUrlInput)
        const urlParams = new URLSearchParams(url.search)

        if (urlParams.has("v")) {
          const videoId = urlParams.get("v")

          const roomVideoIdRef = ref(db, `rooms/${this.roomId}/videoId`)

          await set(roomVideoIdRef, videoId)

          this.player.loadVideoById({ videoId })
        }
      },
    }

  })
</script>

<template>
  <input v-model="videoUrlInput" placeholder="video url here"/>
  <button @click="loadVideo">Load video</button>
  <div id="player"></div>
  <router-link to="/rooms/4">Go to other Id</router-link>
</template>

<style>

</style>
