<template>
  <div class="hello">
      <h2>{{ message }}</h2>
      <h2>자식에게서 전달 받은 값 : {{ message2 }}</h2>
      <child v-on:relayC="relay" v-bind:message="message"></child>
  </div>
</template>

<script>
import child from '@/components/props/Child'
export default {
  name: 'HelloWorld',
  components: {
    'child': child
  },
  methods: {
    relay(message2) {
      this.message2 = message2
    }
  },
  data() {
    return {
      message: 'Hello Component World!',
      message2: ''
    }
  }
}
</script>

<style scoped>
</style>
