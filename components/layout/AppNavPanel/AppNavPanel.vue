<template>
  <div class="app-nav-panel">
    <nav class="app-nav-panel__nav">
      <div
        v-for="(item, index) in navList"
        :key="index"
        class="app-nav-panel__nav-item"
      >
        <nuxt-link :to="item.path" class="app-nav-panel__nav-link">
          <svg-icon
            :name="item.icon"
            class="app-nav-panel__nav-icon icon--block"
          />
          <div class="app-nav-panel__nav-text">{{ item.title }}</div>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavPanel",
  computed: {},

  data() {
    return {
      navList: [
        {
          path: "/questionnairs",
          title: "Опросы",
          icon: "list"
        },
        {
          path: "/users",
          title: "Пользователи",
          icon: "people_outline"
        },
        {
          path: "/black-lists",
          title: "Черные списки",
          icon: "flag_outline"
        },
        {
          path: "/call-center",
          title: "Колл-центр",
          icon: "call"
        }
      ]
    };
  }
};
</script>

<style src="./AppNavPanel.scss" lang="scss"></style>
