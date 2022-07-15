export {}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void | undefined;
    YT: {
      Player: any;
      PlayerState: {
        UNSTARTED: -1;
        ENDED: 0;
        PLAYING: 1;
        PAUSED: 2;
        BUFFERING: 3;
        VIDEO_CUED: 5;
      };
    } | undefined;
  }
}
