<template>
  <div class="hello">
      <h2>{{ message }}</h2>
      <router-link to="/">Home</router-link><br>
      <router-link to="/nested-router">Default Nested Router</router-link><br>
      <router-link to="/nested-router/lower">Lower Nested Router</router-link><br>
      <router-link to="/nested-router/lower2">Lower2 Nested Router</router-link><br>
      <router-link to="/named-view">Named View</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello Vue Router World!'
    }
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
