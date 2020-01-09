<template>
  <div class="app-header">
    <div class="app-header__left">
      <slot name="left-before"></slot>
      <app-search class="app-header__search" />
      <slot name="left-after"></slot>
    </div>
    <div v-if="$slots.default" class="app-header__center">
      <slot></slot>
    </div>
    <div class="app-header__right">
      <slot name="right-before"></slot>
      <mini-profile
        class="app-header__profile"
        :image="currentUser.image"
        :name="currentUser.name"
        :position="currentUser.position"
      />
      <slot name="right-after"></slot>
    </div>
  </div>
</template>
<script>
import { MiniProfile, AppSearch } from "~/components/app";
export default {
  name: "AppHeader",
  components: {
    MiniProfile,
    AppSearch
  },
  computed: {},

  data() {
    return {
      currentUser: {
        image: "/images/ava.jpg",
        name: "Александр Соколов",
        position: "Администратор"
      }
    };
  }
};
</script>

<style src="./AppHeader.scss" lang="scss"></style>
