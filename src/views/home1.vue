<template>
<z-view name="home1">
    <div slot="media" :id="$zircle.getCurrentViewName()" style="height:100%; width: 100%;"></div>
    <section slot="extension">
      <z-nav
      :angle="45"
      size="small"
      to-view="search" style="border-color: purple; background-color: yellow; color: white;">
      <i class="fa fa-search-plus"></i>
      </z-nav>
      <z-nav
        :angle="45"
        size="small"
        to-view="search" style="border-color: black; background-color: yellow; color: white;">
        <i class="fa fa-search-plus"></i>
      </z-nav>
    </section>
  </z-view>
</template>
<script>
/*eslint-disable*/
import L from 'leaflet'
export default {
  data () {
    return {
      map: null,
      tileLayer: null,
      mostrar: false
    }
  },
  methods: {
    initMap () {
      this.map = L.map(this.$zircle.getCurrentViewName()).setView([38.63, -90.23], 12)
      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'})
      this.tileLayer.addTo(this.map)
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>
<style>
</style>

