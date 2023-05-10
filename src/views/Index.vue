<template>
    <div class="flex">
        <div class="index-bg w-1/2 bg-no-repeat bg-cover" />
        <div class="w-1/2 grid">
            <div class="self-center">
                <h1 class="text-red-25 text-4xl text-center">BIENVENIDOS</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IndexPage'
}
</script>
<style scoped lang="scss">
.index-bg {
    background-image: url('../assets/index-bg-1.png');
    min-height: 91.8vh;
}
</style>