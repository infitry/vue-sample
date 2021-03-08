<template>
    <div>
        <span>현재 시각 : {{ currentTime }}</span>
    </div>
</template>

<script>
export default {
    name: 'Date',
    data() {
        return {
            currentTime: null
        }
    },
    mounted: function() {
        this.currentTime = new Date()
        setInterval(() => {
            this.currentTime = new Date()
        }, 1000)
    }
}
</script>