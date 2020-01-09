<template>
  <div class="mini-profile">
    <div class="mini-profile__avatar">
      <img class="mini-profile__img" :src="image" :alt="name" />
    </div>
    <div class="mini-profile__info">
      <div class="mini-profile__name">{{ truncName }}</div>
      <div class="mini-profile__position">{{ position }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MiniProfile",
  props: {
    image: String,
    name: String,
    position: String
  },
  computed: {
    truncName() {
      let nameAsArr = this.name.split(" ");
      let shortLastName = nameAsArr[1].slice(0, 1);
      return nameAsArr[0] + " " + shortLastName + ".";
    }
  },

  data() {
    return {};
  }
};
</script>

<style src="./MiniProfile.scss" lang="scss"></style>
