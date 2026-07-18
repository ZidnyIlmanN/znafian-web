<template>
  <span class="relative inline-flex overflow-hidden align-bottom" style="height: 1.2em; line-height: 1.2; vertical-align: bottom;">
    <span
      v-for="(text, textIdx) in texts"
      :key="textIdx"
      class="flex whitespace-pre"
      :class="textIdx === currentIndex ? 'relative z-10' : 'absolute left-0 top-0 z-0'"
      :style="{ visibility: (textIdx === currentIndex || textIdx === prevIndex) ? 'visible' : 'hidden' }"
    >
      <template v-for="(segment, segIdx) in getSegments(text)" :key="segIdx">
        <GradientText v-if="segment.isGradient">
          <span
            v-for="(charObj, idx) in segment.chars"
            :key="idx"
            class="inline-block will-change-transform"
            :style="getCharStyle(textIdx, charObj.globalIdx)"
          >
            {{ charObj.char === ' ' ? '\u00A0' : charObj.char }}
          </span>
        </GradientText>
        <template v-else>
          <span
            v-for="(charObj, idx) in segment.chars"
            :key="idx"
            class="inline-block will-change-transform"
            :style="getCharStyle(textIdx, charObj.globalIdx)"
          >
            {{ charObj.char === ' ' ? '\u00A0' : charObj.char }}
          </span>
        </template>
      </template>
    </span>
  </span>
</template>

<script>
import GradientText from './GradientText.vue'

export default {
  name: 'CascadeText',
  components: {
    GradientText
  },
  props: {
    texts: {
      type: Array,
      required: true
    },
    gradientWords: {
      type: Array,
      default: () => []
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
      timer: null,
      animTimeout: null
    }
  },
  methods: {
    getSegments(text) {
      if (!this.gradientWords || this.gradientWords.length === 0) {
        return [{
          isGradient: false,
          chars: text.split('').map((char, index) => ({ char, globalIdx: index }))
        }];
      }

      const sortedWords = [...this.gradientWords].sort((a, b) => b.length - a.length);
      const escapedWords = sortedWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      const regex = new RegExp(`(${escapedWords.join('|')})`, 'g');

      const parts = text.split(regex);
      let globalIdx = 0;
      const segments = [];

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (!part) continue;

        const isGradient = sortedWords.includes(part);
        const chars = part.split('').map(char => {
          const obj = { char, globalIdx };
          globalIdx++;
          return obj;
        });

        segments.push({ isGradient, chars });
      }

      return segments;
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
      
      clearTimeout(this.animTimeout);
      this.animTimeout = setTimeout(() => {
        this.prevIndex = -1;
      }, this.duration + (50 * this.staggerDelay)); // reset after characters slide out
    }, this.interval);
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer);
    if (this.animTimeout) clearTimeout(this.animTimeout);
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


