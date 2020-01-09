<template>
  <div class="layout layout--default">
    <app-aside-panel class="layout__panel">
      <template #top>
        <app-logo />
      </template>
      <app-nav-panel />
    </app-aside-panel>
    <div class="layout__main">
      <app-header class="layout__header" />
      <app-breadcrumbs class="layout__breadcrumbs" />
      <div class="layout__page">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { AppAsidePanel, AppNavPanel, AppHeader } from "~/components/layout";
import { AppLogo, AppBreadcrumbs } from "~/components/app";
export default {
  components: {
    AppAsidePanel,
    AppNavPanel,
    AppHeader,
    AppLogo,
    AppBreadcrumbs
  },
  data() {
    return {};
  }
};
</script>
<style src="~/assets/styles/layouts/default.scss" lang="scss"></style>
