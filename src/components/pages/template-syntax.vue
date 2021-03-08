<template>
  <div class="hello">
      <h2>{{ message }}</h2>
      <h2>v-bind</h2>
      <p v-bind:id="idA">아이디 바인딩 ID: {{ idA }}</p>
      <p v-bind:class="classA">클래스 바인딩</p>
      <p v-bind:style="styleA">스타일 바인딩</p>
      <h2>v-if & v-show</h2>
      <p v-if="pIf">태그가 완전히 삭제 됨</p><button type="button" v-on:click="pIfShowHide">v-if</button>
      <p v-show="pShow">태그가 삭제되지 않음</p><button type="button" v-on:click="pShowShowHide">v-show</button>
      <h2>v-for</h2>
      <ul>
        <li v-for="system in systems" v-bind:key="system">{{ system }}</li>
      </ul>
      <h2>v-model</h2>
      <input type="text" v-model="message"/>
      <select v-model="selectBox">
        <option v-bind:value="system" v-for="system in systems" v-bind:key="system">
          {{ system }}
        </option>
      </select>
      <h2>computed</h2>
      <h2>reverse message : {{ reverseMessage }}</h2>
  </div>
</template>

<script>
// import Vue from 'vue'
// const app2 = new Vue({
//   el: '#app2',
//   data() {
//     return {
//       message: '두 번째 인스턴스'
//     }
//   }
// })
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello Vue World!',
      selectBox: [],
      idA: 'leesw',
      classA: 'yellow',
      styleA: 'color: red;',
      pIf: true,
      pShow: true,
      systems: ['android', 'ios', 'window']
    }
  },
  methods: {
    pIfShowHide(event) {
      console.log(event) // event 인자 
      this.pIf = !this.pIf
    },
    pShowShowHide() {
      this.pShow = !this.pShow
    }
  },
  computed: {
    reverseMessage() {
     return this.message.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yellow {
  color: darkkhaki;
}
</style>
