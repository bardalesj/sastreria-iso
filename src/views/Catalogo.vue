<template>
    <div class="mt-20 mx-20 max-w-[520px] my-0 mx-auto">
        <div class="flex justify-between">
            <div v-for="categoria in categorias" :key="categoria.id">
                <div class="contenedor-categoria cursor-pointer">
                    <img :src="require(`../assets/${categoria.imagen}.png`)" :alt="`Imagen-${categoria.nombre}`" />
                    <div class="nombre bg-red-25 py-2 uppercase text-white text-center text-xs">
                        {{ categoria.nombre }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'VerCatalogo',
    data() {
        return {
            categorias: [
                {
                    id: 1,
                    imagen: 'trajes-mujer',
                    nombre: 'Trajes para mujer'
                },
                {
                    id: 2,
                    imagen: 'trajes-hombre',
                    nombre: 'Trajes para hombre'
                },
                {
                    id: 3,
                    imagen: 'uniformes',
                    nombre: 'Uniformes'
                }
            ]
        }
    }
}
</script>
<style scoped lang="scss">
.contenedor-categoria {
    width: 138px;
    height: 260px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &.nombre {
        height: 30px;
    }
}
</style>