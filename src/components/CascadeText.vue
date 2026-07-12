<template>
  <span class="relative inline-flex overflow-hidden align-bottom" style="height: 1.2em; line-height: 1.2; vertical-align: bottom;">
    <span
      v-for="(text, textIdx) in texts"
      :key="textIdx"
      class="flex whitespace-pre"
      :class="textIdx === currentIndex ? 'relative' : 'absolute left-0 top-0'"
    >
      <span
        v-for="(char, charIdx) in getChars(text)"
        :key="charIdx"
        class="inline-block will-change-transform"
        :style="getCharStyle(textIdx, charIdx)"
      >
        {{ char === ' ' ? '\u00A0' : char }}
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'CascadeText',
  props: {
    texts: {
      type: Array,
      required: true
    },
    duration: {
      type: Number,
      default: 500
    },
    staggerDelay: {
      type: Number,
      default: 30
    },
    easing: {
      type: String,
      default: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      currentIndex: 0,
      prevIndex: -1,
      timer: null
    }
  },
  methods: {
    getChars(text) {
      return text.split('');
    },
    getCharStyle(textIdx, charIdx) {
      const isCurrent = textIdx === this.currentIndex;
      const isPrev = textIdx === this.prevIndex;
      
      let animationName = 'none';
      if (isCurrent && this.prevIndex !== -1) {
        animationName = 'slideInUp';
      } else if (isPrev) {
        animationName = 'slideOutUp';
      }
      
      let transform = '';
      if (isCurrent && this.prevIndex === -1) {
        transform = 'translateY(0)';
      } else if (animationName === 'none') {
        transform = 'translateY(100%)';
      }
      
      return {
        animation: animationName !== 'none' ? `${animationName} ${this.duration}ms ${this.easing} both` : 'none',
        animationDelay: animationName !== 'none' ? `${charIdx * this.staggerDelay}ms` : '0ms',
        transform,
        opacity: (isCurrent || isPrev) ? 1 : 0
      };
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.prevIndex = this.currentIndex;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }, this.interval);
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
}
</script>
<style>
@keyframes slideInUp {
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
}
@keyframes slideOutUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
}
</style>


