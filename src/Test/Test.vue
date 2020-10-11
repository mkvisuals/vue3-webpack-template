<template>
    {{ test }}
</template>

<script>
    import {ref} from 'vue';

    export default {
        name: "Test",
        setup() {
            const test = ref('test')
            return {
                test
            }
        }
    }
</script>

<style scoped>

</style>
