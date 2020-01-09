<template>
  <div class="cond-constructor">
    <div class="cond-constructor__content">
      <div v-for="(cond, i) in items" :key="i" class="cond-constructor__block">
        <div v-if="i > 0" class="block-mark">{{ messages.and }}</div>
        <div class="cond-constructor__field">
          <div class="cond-constructor__field-label">{{ cond.title }}</div>
          <base-select
            v-model="cond.value"
            placeholder="Выберите условие"
            :options="conditions"
            @input="selectCondition(cond)"
            class="cond-constructor__field-control"
          />
        </div>
        <div v-if="cond.value" class="cond-constructor__deps">
          <div
            v-for="(dep, j) in cond.deps"
            :key="j"
            class="cond-constructor__field"
          >
            <div class="cond-constructor__field-label">
              <span v-if="j > 0" class="dep-mark">{{ messages.or }}</span>
              {{ dep.title }}
            </div>
            <div
              v-if="dependencies[cond.value].type === 'range'"
              class="cond-constructor__field-control"
            >
              <base-input
                v-model="dep.value.from"
                :label="messages.from"
                class="small"
              ></base-input>
              <base-input
                v-model="dep.value.to"
                :label="messages.to"
                class="small"
              ></base-input>
            </div>
            <base-select
              v-else-if="dependencies[cond.value].type === 'select'"
              v-model="dep.value"
              :placeholder="`Выберите ${messages[cond.value].toLowerCase()}`"
              :options="dependencies[cond.value].options"
              :key="cond.value + j"
              class="cond-constructor__field-control"
            />
          </div>
        </div>
        <div class="cond-constructor__block-actions">
          <base-button
            v-if="cond.value"
            theme="primary-outline"
            icon="add"
            @click="addDeps(cond)"
          >
            {{ messages.add + " " + messages[cond.value].toLowerCase() }}
          </base-button>
          <base-button
            theme="secondary-outline"
            icon="delete"
            @click="deleteCondition(i)"
          >
            {{ messages.delete + " " + messages.condition.toLowerCase() }}
          </base-button>
        </div>
      </div>
    </div>
    <div class="cond-constructor__add">
      <div class="cond-constructor__add-control" @click="addCondition">
        <svg-icon name="add" class="cond-constructor__add-control-icon" />
        <div class="cond-constructor__add-control-text">
          Нажмите, чтобюы добавить новое условие выборки.
          <br />
          Все условия связываются между собой логическим &laquo;И&raquo;.
        </div>
      </div>
    </div>
    <div class="cond-constructor__actions">
      <base-button theme="light">{{ messages.test }}</base-button>
      <base-button icon="arrow-forward" icon-position="after" @click="submit">
        {{ messages.next }}
      </base-button>
    </div>
  </div>
</template>
<script>
import { BaseButton, BaseSelect, BaseInput } from "~/components/base";
export default {
  name: "CondConstructor",
  components: {
    BaseButton,
    BaseSelect,
    BaseInput
  },
  computed: {},

  data() {
    return {
      messages: {
        condition: "Условие",
        add: "Добавить",
        delete: "Удалить",
        next: "Далее",
        test: "Протестировать опрос",
        card_state: "Статус",
        card_type: "Тип",
        age_range: "Диапазон",
        and: "и",
        or: "или",
        from: "от",
        to: "до"
      },
      conditions: [
        {
          title: "Возраст респондента",
          value: "age_range"
        },
        {
          title: "Тип карты лояльности",
          value: "card_type"
        },
        {
          title: "Статус карты лояльности",
          value: "card_state"
        }
      ],
      dependencies: {
        age_range: {
          type: "range"
        },
        card_type: {
          type: "select",
          options: [
            {
              title: "Platinum",
              value: "platinum"
            },
            {
              title: "Gold",
              value: "gold"
            },
            {
              title: "Silver",
              value: "silver"
            },
            {
              title: "Standart",
              value: "standart"
            }
          ]
        },
        card_state: {
          type: "select",
          options: [
            {
              title: "Активна",
              value: "active"
            },
            {
              title: "Неактивна",
              value: "passive"
            },
            {
              title: "Устарела",
              value: "old"
            }
          ]
        }
      },
      items: []
    };
  },

  methods: {
    addCondition() {
      this.items.push({
        title: `${this.messages.condition} ${this.items.length + 1}`,
        value: "",
        deps: []
      });
    },
    deleteCondition(i) {
      this.items.splice(i, 1);
    },
    selectCondition(cond) {
      cond.deps = [];
      this.addDeps(cond);
    },
    addDeps(cond) {
      cond.deps.push({
        title: `${this.messages[cond.value]} ${cond.deps.length + 1}`,
        value:
          this.dependencies[cond.value].type === "range"
            ? {
                from: "",
                to: ""
              }
            : ""
      });
    },
    async submit() {
      await this.$axios
        .$post("http://httpbin.org/anything", this.items)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style src="./CondConstructor.scss" lang="scss"></style>
