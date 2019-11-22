<template>
  <div>
    <div id='on' @click="isOn=true" :class="{active: isOn}">On</div>
    <div id='off' @click="isOn=false" :class="{active: !isOn}">Off</div>
  </div>
</template>

<script>

export default {
  data: () => {
    return { isOn: false };
  }
};

</script>

<style scoped>

#on, #off{
    width: 40px;
    background-color: lightgray;
    text-align: center;
    cursor: pointer;
    display: inline-block;
}

#on:hover, #on.active{
    background-color: lightgreen;
}

#off:hover, #off.active{
    background-color: lightcoral;
}

</style>
