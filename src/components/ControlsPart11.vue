<template>
  <div>
    <h1>Элементы управления и события</h1>
    <div>Урок 156</div>
    <div>email<input type="input" v-model="userData.email" /></div>
    <div>возраст<input type="input" v-model="userData.age" /></div>
    <div>пароль<input type="password" v-model.lazy="userData.pass" /></div>
    <textarea rows="10" v-model="message"></textarea>
    <div><button>Кнопка</button></div>
    <div><input type="checkbox" v-model="chkBoxVal" />Одиночный флажок</div>
    <div>
      <label>
        <input type="checkbox" value="One" v-model="chkBoxArr" />Флажок 1
      </label>
      <label>
        <input type="checkbox" value="two" v-model="chkBoxArr" />Флажок 2
      </label>
    </div>
    <div>
      <label><input type="radio" value="Male" v-model="gender" />Male</label>
      <label><input type="radio" value="Female" v-model="gender" />Female</label>    
    </div>
    <div><select v-model='selectedPriority'><option v-for="itemPrior in priority" v-bind:key="itemPrior">{{ itemPrior }}</option></select></div>
    <appSwitch></appSwitch>
    <br />
    <div>email: {{ userData.email }}</div>
    <div>password: {{ userData.pass }}</div>
    <div>age: {{ userData.age }}</div>
    <div style="white-space: pre">message: {{ message }}</div>
    <div>Значение флажка: {{ chkBoxVal }}</div>
    <div>Значение флажков:</div>
    <ul>
      <li v-for="items in chkBoxArr" v-bind:key="items">{{ items }}</li>
    </ul>
    <div>Gender: {{ gender }}</div>
    <div>selectedPriority: {{ selectedPriority }}</div>
  </div>
</template>

<script>

import appSwitch from './switch'

const CreateLocalState = () => {
  return {
    userData: {
      email: "",
      age: 33,
      pass: ""
    },
    message: "",
    chkBoxVal: true,
    chkBoxArr: [],
    gender: "Male",
    selectedPriority: 'Medium',
    priority: ["High", "Medium", "Low"]
  };  
};

export default {
  data: () => {
    return CreateLocalState();
  },
  components: { appSwitch }
};
</script>
