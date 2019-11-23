<template>
  <div>
    <div>Фильтр дя списка<input v-model="filterCondition" /></div>
    <div>
      <ul class="someList">
        <strong>Отфильтрованый</strong>
        <li v-for="onefruits in filterFruits" v-bind:key="onefruits">
          {{ onefruits }}
        </li>
      </ul>
    </div>
    <br />
  </div>
</template>

<script>
import { listFruitMixins } from "./ListFruitsObj";

export default {
  mixins: [listFruitMixins]
};
</script>

<style scoped>
.someList {
  display: inline-block;
}
</style>
