<template>
    <div>
       <!-- nav -->
        <NavPage/>

        <slot/>
    </div>
</template>

<script lang="ts">
import NavPage from "../Layout/NavPage.vue"
    export default {
        name:'MasterView',
        components:{NavPage},
    }
</script>

<style lang="scss" scoped>

</style>