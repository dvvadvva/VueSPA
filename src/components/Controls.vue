<template>
  <div>
    <h1>Элементы управления и события</h1>
    <div>Поле для ввода<input type="input" v-model="name" /></div>
    <div><button>Кнопка</button></div>
    <div><input type="checkbox" v-model="chkBoxVal" />Флажок</div>
    <br />
    <div>Значение поля ввода: {{ name }}</div>
    <div>Значение флажка: {{ chkBoxVal }}</div>
  </div>
</template>

<script>
const CreateLocalState = () => {
  return { name: "ini value", chkBoxVal: true };
};

export default {
  data: function() {
    return CreateLocalState();
  }
};
</script>
