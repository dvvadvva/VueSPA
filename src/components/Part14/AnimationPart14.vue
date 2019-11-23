<template>
  <div>
    <h1>Part.14 Animations and transitions</h1>
    <p>Lesson 195</p>
    <button @click="mustShow = !mustShow">Show alert</button>
    <br /><br />
    <transition name="fade">
      <div v-if="mustShow" class="textBox">Some text</div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => {
    return { mustShow: true };
  }
};
</script>

<style scoped>
.slide-enter {
}
.slide-enter-active {
}
.slide-leave {
}
.slide-leave-active {
}

@keyframes slide-in {
  from {
      transform: translateY(20px)
  }
  to {
      transform: translateY(0px)
  }
}

@keyframes slide-out {
  from {
      transform: translateY(0px)
  }
  to {
      transform: translateY(20px)
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.textBox {
  width: 400px;
  height: 30px;
  background-color: lightblue;
  text-align: center;
  border-radius: 5px;
  margin: 3px;
}
</style>
