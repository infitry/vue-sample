<template>
  <div class="hello">
      <h2>{{ message }}</h2>
      <button type="button" v-on:click="getData()">Http 요청</button>
      <ul>
          <li v-for="data in dataList" v-bind:key="data">{{ data }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello Axios World!',
      dataList: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const th = this
      this.$axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
        .then(function(response) { // 성공 시 처리
          console.log(response)
          th.dataList = response.data
        }) 
        .catch(function (error) { // 에러처리
          if (error.response) {
            // 요청 성공했으나 서버가 2xx의 범위를 벗어나는 상태 코드로 응답
          } else if (error.request) {
            // 요청이 이루어졌으나 응답을 받지 못함
          } else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생하였습니다.
          }
        })
    }
  }
}
</script>

<style scoped>
</style>
