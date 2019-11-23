<template>
  <div>
    <h1>Part 13. Using and creating Directives</h1>
    <div>Lesson 179</div>
    <div>{{ someText }}</div>
    <div>{{ someText | upperconv }}</div>
    <div>{{ someText | lowerconv }}</div>
    <div>Фильтр дя списка<input v-model="filterCondition" /></div>
    <div>
      <ul class="someList"><strong>Полный список</strong>
        <li v-for="Items in Fruits" v-bind:key="Items">{{ Items }}</li>
      </ul>
      <ul class="someList"><strong>Отфильтрованый</strong>
        <li v-for="onefruits in filterFruits" v-bind:key="onefruits">
          {{ onefruits }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someText: "Text with UPPER and lower symbol",
      Fruits: ["apple", "mango", "orange", "melone", "banana"],
      filterCondition: ""
    };
  },
  computed: {
    filterFruits() {
      return this.Fruits.filter(el => {
        return el.match(this.filterCondition);
      });
    },
    filters: {
      upperconv(value) {
        return value.toUpperCase();
      }
    }
  }
};
</script>

<style scoped>
.someList {
  display: inline-block;
}
</style>
