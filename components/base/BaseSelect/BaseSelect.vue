<template>
  <div class="base-select">
    <label class="base-select__label">
      <div v-if="label" class="base-select__label-text">
        {{ label }}
        <span v-if="required" class="required-star">*</span>
      </div>
      <div
        class="base-select__select"
        :class="{ opened: opened }"
        @click="opened ? close() : open()"
        v-click-outside="close"
      >
        <div class="base-select__selection">
          <div class="base-select__selection-text">
            {{ !selected && placeholder ? placeholder : selected }}
          </div>
          <div class="base-select__selection-icon">
            <svg-icon name="arrow_drop_down" />
          </div>
        </div>
        <div v-show="opened" class="base-select__dropdown">
          <div
            v-for="option in options"
            :key="option.value"
            class="base-select__option"
            @click.stop="select(option)"
          >
            {{ option.title }}
          </div>
        </div>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  name: "BaseSelect",
  props: {
    label: String,
    placeholder: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },
  data() {
    return {
      selected: "",
      opened: false
    };
  },
  computed: {
    selectListeners: function() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit("input", event.target.value);
        }
      });
    },
    required() {
      return this.$attrs.required !== undefined;
    }
  },

  methods: {
    close() {
      this.opened = false;
    },
    open() {
      this.opened = true;
    },
    select(option) {
      this.selected = option.title;
      this.$emit("input", option.value);
      this.close();
    }
  }
};
</script>

<style src="./BaseSelect.scss" lang="scss"></style>
