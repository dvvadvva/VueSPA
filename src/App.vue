<template>
  <div id="app" class="App">
    <div class="App.h"></div>
    <div class="App.h">
      <h1>Vue demo</h1>
    </div>
    <div class="App.n">
      <div class="menuItems">
        <router-link to="/HelloWorld" class="menuItems.i"
          >Hello World</router-link
        >
        <router-link to="/Controls" class="menuItems.i">Controls</router-link>
        <router-link to="/cssandevent" class="menuItems.i">CSS and event</router-link>
        <router-link to="/controlspart11" class="menuItems.i">Part 11. Handling user Input and forms</router-link>
        <router-link to="/directives12" class="menuItems.i">Part 12. Using and creating Directives</router-link>
        
        <router-link to="/foo" class="menuItems.i">Item 2</router-link>
      </div>
    </div>

    <div class="App.c"><router-view></router-view></div>
  </div>
</template>

<script>

export default {
  name: "app"
};

</script>

<style scoped>
.App {
  display: grid;
  grid-template-areas:
    "h h"
    "n c";
  /* grid-template-rows: 60px 1fr; */
  grid-template-columns: 2fr 10fr;
}

.menuItems {
  display: grid;
  grid-template-areas:
    "i"
    "i";
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}

.App-header {
  grid-area: h;
  background-color: green;
}

.content {
  grid-area: c;
  background-color: lightblue;
}
</style>
