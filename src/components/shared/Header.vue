<template>
    <div class="h-[79px] bg-blue-25 flex justify-between items-center px-4 md:pr-20 md:pl-2">
        <div class="flex">
            <router-link 
                class="text-white cursor-pointer mr-8"
                to="/crear-pedido"
            >
                HAZ TU PEDIDO ACÁ
            </router-link>
            <router-link
                class="text-white cursor-pointer"
                to="/catalogo"
            >
                CATÁLOGO
            </router-link>
        </div>
        <div>
            <router-link
                to="/"
            >
                <img class="mt-16" src="../../assets/logo.svg" alt="Logo">
            </router-link>
        </div>
        <div class="flex">
            <router-link 
                class="text-white mr-4"
                to="/contacto"
            >
                CONTACTO
            </router-link>
            <router-link
                class="text-white cursor-pointer"
                to="/login"
            >
                MI CUENTA
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>