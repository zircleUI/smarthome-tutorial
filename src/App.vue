<template>
  <z-canvas :views='$options.components'></z-canvas>
</template>
<script>
import item from './views/item'
import home from './views/home'
import home1 from './views/home1'
import search from './views/search'
import collection from './views/collection'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import tinycolor from 'tinycolor2'
const router = new Router()
// const search = () => import('./views/search')
const two = {
  template: `<z-view name="two">2 
    <div slot="extension">
    <z-nav
      :angle="56"
      to-view="three">3
    </z-nav>
    <z-range
      :angle="156"
      :progress="15"
      :label="vol">3
    </z-range>
    </div>
  </z-view>`
}
const three = {
  template: `<z-view name="three">3
  <z-nav 
      slot="extension"
      :angle="56"
      to-view="one">1
    </z-nav>
  </z-view>`
}
export default {
  components: {
    item,
    home,
    // home,
    home1,
    // search: () => import('./views/search'),
    collection
  },
  router,
  data () {
    return {
      store: this.$zstore,
      list: {search, collection, item, three, two}
    }
  },
  mounted () {
    this.$zircle.setApp({
      mode: 'full',
      style: {
        theme: 'blue',
        mode: 'light-filled'
      },
      debug: true
    })
    this.$zircle.setView('home')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
