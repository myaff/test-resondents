<template>
  <div class="tab-panel">
    <nav class="tab-panel__nav">
      <div
        v-for="item in items"
        :key="item.title"
        class="tab-panel__item"
        :value="item.title"
        @click="click(item.title)"
        :class="{ active: value === item.title }"
      >
        {{ item.title }}
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "TabPanel",
  props: {
    items: {
      type: Array,
      required: true
    },
    value: String
  },
  methods: {
    click(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style src="./TabPanel.scss" lang="scss"></style>
