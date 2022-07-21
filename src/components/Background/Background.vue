<script lang="ts">
import { defineComponent } from "vue";
import { Context } from "../../webgl/Context";
import { Sphere } from "../../webgl/Entities/Sphere";
import { Wormhole } from "../../webgl/Entities/Wormhole";

export default defineComponent({
  computed: {
    roomId() {
      // We will see what `params` is shortly
      return this.$route.params.id;
    },
  },
  mounted() {
    const canvas = document.getElementById("webgl") as HTMLCanvasElement;
    const context = new Context(canvas);

    context.addEntity(new Sphere());
    context.addEntity(new Wormhole());

    context.start();
  },
});
</script>

<template>
  <canvas id="webgl"></canvas>
</template>

<style>
#webgl {
  height: 100%;
  width: 100%;
}
</style>
