<template>
  <z-canvas :views='$options.components'></z-canvas>
</template>
<script>
import Vue from 'vue'
// TO USE VUE-ROUTER UNCOMMENT THE FOLLOWING LINES
// import Router from 'vue-router'
// Vue.use(Router)
// const router = new Router()
export default {
  components: {
    tv: () => import('./views/tv'),
    living: () => import('./views/living'),
    search: () => import('./views/search'),
    device: () => import('./views/device'),
    home: () => import('./views/home'),
    settings: () => import('./views/settings'),
    rooms: () => import('./views/rooms'),
    devices: () => import('./views/devices'),
    status: () => import('./views/status'),
    scenes: () => import('./views/scenes'),
    maps: () => import('./views/maps'),
    logs: () => import('./views/logs')
  },
  mounted () {
    this.$zircle.config({
      mode: 'full',
      style: {
        theme: 'black',
        mode: 'dark'
      },
      debug: true
    })
    this.$zircle.setView('home')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>
