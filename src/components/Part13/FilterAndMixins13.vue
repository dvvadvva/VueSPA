<template>
  <div>
    <h1>Part 13. Using and creating Directives</h1>
    <div>Lesson 179</div>
    <div>{{ someText }}</div>
    <div>{{ someText | upperconv }}</div>
    <div>{{ someText | lowerconv }}</div>
    <br />
    <div>Фильтр дя списка<input v-model="filterCondition" /></div>
    <ul class="someList">
      <strong>Полный список</strong>
      <li v-for="Items in Fruits" v-bind:key="Items">{{ Items }}</li>
    </ul>
    <ul class="someList">
      <strong>Отфильтрованый</strong>
      <li v-for="onefruits in filterFruits" v-bind:key="onefruits">
        {{ onefruits }}
      </li>
    </ul>
    <br />
    <listFruits />
  </div>
</template>

<script>

import listFruits from './ListFruits.vue'
import { listFruitMixins } from "./ListFruitsObj";

export default {
  mixins: [listFruitMixins],
  data() {
    return {
      someText: "Text with UPPER and lower symbol"
    };
  },
     components: {
      listFruits: listFruits
  }
};
</script>

<style scoped>
.someList {
  display: inline-block;
}
</style>
