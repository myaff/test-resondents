<template>
  <div class="app-aside-panel">
    <div v-if="$slots.top" class="app-aside-panel__top">
      <slot name="top"></slot>
    </div>
    <div class="app-aside-panel__main">
      <slot></slot>
    </div>
    <div v-if="$slots.bottom" class="app-aside-panel__bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppAsidePanel",
  computed: {},

  data() {
    return {};
  }
};
</script>

<style src="./AppAsidePanel.scss" lang="scss"></style>
