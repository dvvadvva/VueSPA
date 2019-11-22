<template>
  <div>
    <h1>Part 12. Using and creating Directives</h1>
    <div>Lesson 168</div>
    <br />
    <h1>Build-in directives</h1>
    <div v-text="'Просто текст'"></div>
    <div v-html="'<strong>Просто жирный текст</strong>'"></div>
    <br />
    <h1>Custom directives</h1>
    <div v-highlight>v-highlight директива</div>
    <div v-local-highlight>
      v-local-highlight локально определенная директива
    </div>
    <div v-local-complex="{ backgroundColor: 'yellow', textColor: 'red' }">
      v-local-complex="{ backgroundColor: 'yellow', textColor: 'red' } локально определенная директива с сложным параметром
    </div>
    <div v-highcolor="'red'">v-highcolor='"red"' директива</div>
    <br />
    <div v-highifcolor:background="'blue'">
      v-highifcolor:background="'blue'" директива
    </div>
    <div v-highifcolor:somearguments="'blue'">
      v-highifcolor:somearguments="'blue'" директива
    </div>
    <div v-highifcolor="'blue'">v-highifcolor="'blue'" директива</div>
  </div>
</template>
<script>
export default {
  directives: {
    "local-highlight": {
      bind(el) {
        el.style.backgroundColor = "lightgray";
      }
    },
    "local-complex": {
      bind(el, binding) {
        el.style.backgroundColor = binding.value.backgroundColor;
        el.style.color = binding.value.textColor;
      }
    }
  }
};
</script>

<style scoped></style>
