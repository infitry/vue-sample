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
  methods: {
    getData() {
      const th = this
      this.$axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
        .then(function(response) {
          console.log(response)
          th.dataList = response.data
        }) 
    }
  }
}
</script>

<style scoped>
</style>
