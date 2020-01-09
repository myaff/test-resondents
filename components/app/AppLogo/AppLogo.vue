<template>
  <div class="app-logo">
    <nuxt-link to="/" class="app-logo__link">
      <img v-if="image" :src="image" class="app-logo__img" alt="company logo" />
      <svg-icon v-else-if="icon" :name="icon" class="app-logo__icon" />
      <div v-else class="app-logo__placeholder"></div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "AppLogo",
  props: {
    image: String,
    icon: String
  },

  data() {
    return {};
  }
};
</script>

<style src="./AppLogo.scss" lang="scss"></style>
