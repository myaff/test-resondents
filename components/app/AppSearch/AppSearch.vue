<template>
  <div class="app-search">
    <base-input
      v-model="request"
      class="app-search__field"
      placeholder="Поиск по системе"
    />
    <base-button
      icon="search"
      theme="plain"
      shape="square"
      class="app-search__btn"
    />
  </div>
</template>
<script>
import { BaseInput, BaseButton } from "~/components/base";
export default {
  name: "AppSearch",
  components: {
    BaseInput,
    BaseButton
  },

  data() {
    return {
      request: ""
    };
  }
};
</script>

<style src="./AppSearch.scss" lang="scss"></style>
