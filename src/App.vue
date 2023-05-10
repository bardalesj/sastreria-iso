<template>
  <div id="app">
    <div class="relative">
      <HeaderComponent />
    </div>
    <router-view />
  </div>
</template>
<script>
import HeaderComponent from '@/components/shared/Header'
export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>