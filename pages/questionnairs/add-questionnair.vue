<template>
  <div class="page page--add-questionnair page--with-tabs">
    <tab-panel v-model="tab" :items="tabs" class="page__tab-panel" />
    <div class="page__heading">Добавить опрос</div>
    <div class="page__tabs">
      <div
        v-for="item in tabs"
        :key="item.title"
        v-show="item.title === tab"
        class="page__tab-item"
      >
        <component v-if="item.component" :is="item.component" keep-alive />
        <div v-else class="page__tab-content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { TabPanel } from "~/components/app";
import CondConstructor from "~/components/constructors/CondConstructor/CondConstructor.vue";
export default {
  name: "AddQuestionnair",
  components: { CondConstructor, TabPanel },
  computed: {},

  data() {
    return {
      tab: "Респонденты",
      tabs: [
        {
          title: "Параметры",
          content: "Параметры"
        },
        {
          title: "Вопросы",
          content: "Вопросы"
        },
        {
          title: "Логика",
          content: "Логика"
        },
        {
          title: "Условия",
          content: "Условия"
        },
        {
          title: "Респонденты",
          component: "cond-constructor"
        }
      ]
    };
  }
};
</script>
