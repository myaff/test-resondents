<template>
  <div class="page page--quastionnair">
    <div class="page__heading">Опросы</div>
    <div class="page__content">
      <base-button url="questionnairs/add-questionnair" icon="add">
        Добавить опрос
      </base-button>
    </div>
  </div>
</template>
<script>
import { BaseButton } from "~/components/base";
export default {
  name: "Quastionnair",
  components: { BaseButton },
  computed: {},

  data() {
    return {};
  }
};
</script>

<style src="~/assets/styles/pages/quastionnair.scss" lang="scss"></style>
