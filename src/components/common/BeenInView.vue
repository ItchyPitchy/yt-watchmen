<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    disableStartInView: {
      type: Boolean as PropType<boolean>,
      required: false,
    },
    elementRef: {
      type: Object as PropType<Element>,
      required: false,
    }
  },
  mounted() {
    const rect = this.elementRef!.getBoundingClientRect()

    if (rect.top < window.innerHeight + 0 && rect.bottom > 0) {
      const classes = ['been-in-view']
      if (!this.disableStartInView) classes.push('start-in-view')
      this.elementRef!.classList.add(...classes)
    }

    window.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (this.elementRef) {
        const rect = this.elementRef.getBoundingClientRect()

        if (rect.top < window.innerHeight + 0 && rect.bottom > 0) {
          this.elementRef.classList.add('been-in-view')
        }
      }
    }
  }
})

</script>

<template>
  <slot></slot>
</template>
