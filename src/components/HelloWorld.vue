<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
let createLocalState = () => {
  return {
    name: "Hello world"
  };
};

export default {
  data: function() {
    return createLocalState();
  }
};
</script>
