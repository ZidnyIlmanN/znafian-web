<template>
  <div id="app" class="font-body-md text-on-background bg-background min-h-screen">
    <router-view/>
    <div class="cursor-dot hidden md:block" ref="cursorDot"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.initCursor();
  },
  beforeUnmount() {
    if (this._mouseMoveHandler) {
      document.removeEventListener('mousemove', this._mouseMoveHandler);
    }
  },
  methods: {
    initCursor() {
      const dot = this.$refs.cursorDot;
      if (!dot) return;

      this._mouseMoveHandler = (e) => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      };
      document.addEventListener('mousemove', this._mouseMoveHandler);

      // Use event delegation for hover scale on interactive elements
      document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button, input, textarea, [role="button"], router-link')) {
          dot.style.transform = 'scale(4)';
          dot.style.opacity = '0.5';
        }
      });
      document.addEventListener('mouseout', (e) => {
        if (e.target.closest('a, button, input, textarea, [role="button"], router-link')) {
          dot.style.transform = 'scale(1)';
          dot.style.opacity = '1';
        }
      });
    }
  }
}
</script>

<style>
.cursor-dot {
  width: 8px;
  height: 8px;
  background: #1c1b1b;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease, opacity 0.15s ease;
}
</style>
