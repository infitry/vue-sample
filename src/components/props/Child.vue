<template>
    <div>
        <h2>안녕하세요, 자식 컴포넌트 입니다.</h2>
        <span>전달받은 값 : {{ message }} , {{ message2 }}</span>
        <input type="text" v-model="message2"/>
        <button type="button" v-on:click="relay">부모에게 값 전달</button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    props: ['message'],
    data() {
        return {
            message2: ''
        }
    },
    methods: {
        relay() {
            this.$emit('relayC', this.message2)
        }
    },
    mounted: function() {
        this.message2 = this.message + ' 자식'
    }
}
</script>