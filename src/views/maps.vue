<template>
<z-view label="Leaflet | OpenStreetMap | CartoDB" ref="map">
    <div slot="media" :id="$zircle.getCurrentViewName()" style="height:100%; width: 100%;">
    </div>
    <section slot="extension">
       <z-spot button
        :angle="-90"
        size="s"
        :style="active === 0 ? 'border-color: purple; color: purple;' : ''"
        label="Mary"
        label-pos="top"
        @click.native="showMe(0, 'purple')">
        <i class="fas fa-female"></i>
      </z-spot>
      <z-spot button
        :angle="30"
        size="s"
        label="John"
        :style="active === 1 ? 'border-color: green; color: green;' : ''"
        @click.native="showMe(1, 'green')">
        <i class="fas fa-male"></i>
      </z-spot>
      <z-spot button
        :angle="150"
        size="s"
        label="Peter"
        :style="active === 2 ? 'border-color: orange; color: orange;' : ''"
        @click.native="showMe(2, 'orange')">
        <i class="fas fa-child"></i>
      </z-spot>
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
      markers: [],
      active: ''
    }
  },
  methods: {
    initMap () {
      this.map = L.map(this.$zircle.getCurrentViewName(), {attributionControl: false, zoomControl: false}).setView([38.63, -90.23], 14)
      L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        { 
          zoom: 18
        }).addTo(this.map)
      this.markers.push(
        L.marker([38.60, -90.20]).bindPopup("Mary at work").addTo(this.map),
        L.marker([38.63, -90.23]).bindPopup("John at home.").addTo(this.map).openPopup(),
        L.marker([38.66, -90.26]).bindPopup("Peter at school").addTo(this.map)
      )
      this.active = 1
      this.showMe(1, 'green')
    },
    showMe (index, color) {
      this.map.panTo(this.markers[index].getLatLng())
      this.markers[index].openPopup()
      this.active = index
      this.$refs.map.$el.style.borderColor = color
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>
<style>
  @import url('https://unpkg.com/leaflet@1.3.1/dist/leaflet.css');
</style>

