<template>
  <div class="app-breadcrumbs">
    <nav class="app-breadcrumbs__nav">
      <ul class="app-breadcrumbs__list">
        <li v-for="(item, i) in crumbs" :key="i" class="app-breadcrumbs__item">
          <template v-if="item.name === 'home'">
            <nuxt-link to="/" class="app-breadcrumbs__link home">
              <svg-icon name="home" />
            </nuxt-link>
          </template>
          <template v-else>
            <svg-icon name="arrow_forward" class="app-breadcrumbs__delimiter" />
            <nuxt-link
              class="app-breadcrumbs__link"
              :class="item.classes"
              :to="item.path"
            >
              {{ item.name }}
            </nuxt-link>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "AppBreadcrumbs",

  data() {
    return {
      messages: {
        users: "Пользователи",
        questionnairs: "Опросы",
        ["add-questionnair"]: "Добавить опрос",
        ["black-lists"]: "Черные списки",
        ["call-center"]: "Колл-центр"
      }
    };
  },
  computed: {
    crumbs() {
      const crumbs = [];
      this.$route.matched.map((item, i, { length }) => {
        let pathArr = item.path.split("/");
        for (let j = 0; j < pathArr.length; j++) {
          const crumb = {};
          crumb.path = pathArr[j] ? "/" + pathArr[j] : "/";
          crumb.name = pathArr[j] ? this.messages[pathArr[j]] : "home";

          // is last item?
          if (j === pathArr.length - 1) {
            // is param route? .../.../:id
            if (item.regex.keys.length > 0) {
              crumbs.push({
                path: item.path.replace(/\/:[^/:]*$/, ""),
                name: this.messages[item.name.replace(/-[^-]*$/, "")]
              });
              crumb.path = this.$route.path;
              crumb.name = this.messages[
                (this.$route.name, [crumb.path.match(/[^/]*$/)[0]])
              ];
            }
            crumb.classes = "is-active";
          }

          crumbs.push(crumb);
        }
      });

      return crumbs;
    }
  }
};
</script>

<style src="./AppBreadcrumbs.scss" lang="scss"></style>
