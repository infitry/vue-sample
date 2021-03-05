<template>
  <div class="hello">
      <h2>Vue.js Life Cycle</h2>
      <div id="dom"></div>
      <pre>
        update : {{count}}
        update2 : {{count2}}
      </pre>
      <button type="button" @click="updated">update</button>
      <button type="button" @click="updated2">update2</button>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      nameDisplay: false,
      name: '',
      count: 0,
      count2: 1,
      createdCount: 0
    }
  },
  methods: {
    updated() {
      this.count += 1
    },
    updated2() {
      this.count2 += 2
    }
  },

  beforeCreate: function() {
    // this.updated() // data, methods 접근확인
    console.log('beforeCreate.. / data 없음, methods 없음, DOM 접근 불가')
  },
  created: function() {
    this.updated() // data, methods 접근확인
    console.log('created.. / data, methods 있음, DOM 접근 불가')
  },
  beforeMount: function() {
    //document.getElementById('dom').innerHTML = '<input type="text"/>' // dom 접근확인
    console.log('beforeMount.. / render() 함수 호출 전 DOM 접근 불가')
  },
  mounted: function() {
    document.getElementById('dom').innerHTML = '<input type="text"/>' // dom 접근 확인
    console.log('mounted.. / data, methods 있음, DOM 접근 가능')
  },
  beforeUpdate: function() {
    console.log('beforeUpdate.. / 데이터 변경 후 화면 다시그리기 전 화면이 다시 그려지지는 않음')
  },
  updated: function() {
    console.log('updated.. / 데이터 변경, 화면 다시그린 후 실행, 화면 요소와 관련된 로직 추가')
  },
  beforeDestroy: function() {
    console.log('beforeDestroy.. / 인스턴스 파괴 전, 인스턴스 접근가능')
  },
  destroyed: function() {
    console.log('destroyed.. / 인스턴스 파괴 후')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
