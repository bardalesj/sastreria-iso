<template>
    <div class="inicio-sesion-bg w-full bg-no-repeat bg-cover">
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'IniciarSesion'
}
</script>
<style scoped lang="scss">
.inicio-sesion-bg {
    background-image: url('../assets/iniciar-sesion-bg.png');
    min-height: 91.8vh;
}</style>