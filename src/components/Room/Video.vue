<script lang="ts">
  import { defineComponent } from "vue";

  window["onYouTubeIframeAPIReady"] = () => {
    videoComponent.methods.initYoutube()
  }

  const videoComponent = defineComponent({
    data() {
      return {
        player: null,
        videoUrl: "",
        done: false,
      }
    },
    mounted() {
    },
    created() {
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    },
    methods: {
      initYoutube() {
        this.player = new window["YT"].Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
          }
        });
      },
      // 4. The API will call this function when the video player is ready.
      onPlayerReady(event) {
        console.log("onplayerready")
        event.target.playVideo();
      },
      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      // var done = false;
      onPlayerStateChange(event) {
        console.log("onplayerstatechange")
        if (event.data == window["YT"].PlayerState.PLAYING && !this.done) {
          setTimeout(this.stopVideo, 6000);
          this.done = true;
        }
      },
      stopVideo() {
        console.log("stopvideo")
        this.player.stopVideo();
      },
    }

  })

  export default videoComponent
</script>

<template>
  <input @v-model="videoUrl" />
  <div id="player"></div>
</template>

<style>

</style>
