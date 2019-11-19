<template>
  <div>
    <h1>Элементы управления и события</h1>
    <div>Поле для ввода<input type='input' v-model="name"/></div>
    <div><button>Кнопка</button></div>
    <div><input type='checkbox' />Флажок</div>
    <div>{{name}}</div>
  </div>
</template>

<script>

const CreateLocalState = ()=>{
  return {name: 'ini value'}
}

export default {
  data: function(){
    return CreateLocalState
  }
};
</script>
