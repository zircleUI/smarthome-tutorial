<template>
  <z-view
  style="border-width: 8px"
  slider
  :progress="progress">
    <span style="color: var(--accent-text-color)">Living room
      <h1>{{activeScene}}</h1>
      {{msg}}
    </span>
    <img slot="image" src="living.jpg" width="100%" height="100%" style="opacity: 0.3">
    <div slot="extension">
      <z-spot
        v-for="(device, index) in devices"
        :button="device.name !== 'AC'"
        :knob="device.name === 'AC'"
        v-bind.sync="device.temp"
        :angle="1 + (180 / (devices.length - 1) * index)"
        :distance="100"
        size="m"
        :to-view="device.view"
        :label="device.name"
        :key="'dev_' + index">
        <i :class="device.icon"></i>
        <z-spot slot="extension"
          button
          :angle="-45"
          size="xxs"
          :style="device.state === 'on' ? 'border-color: green; background-color: green;' : 'border-color: red; background-color: red;'">
        </z-spot>
      </z-spot>
      <z-spot
        v-for="(scene, index) in scenes"
        button
        size="s"
        :angle="225 + (90 / (scenes.length - 1) * index)"
        :distance="125"
        :label="scene.name"
        label-pos="top"
        :key="'scn_' + index"
        @click.native="showMe(scene.name)">
        <i :class="scene.icon"></i>
      </z-spot>
    </div>
  </z-view>
</template>
<script>
/*eslint-disable*/
export default {
  data () {
    return {
      progress: 0,
      msg: '',
      activeScene: '',
      devices: [],
      scenes: [
        {name: 'Relax', state: 'active', icon: 'fas fa-book'},
        {name: 'Theatre', state: 'deactive', icon: 'fas fa-film'},
        {name: 'Party', state: 'deactive', icon: 'fas fa-birthday-cake'}
      ]
    }
  },
  computed: {
    retrieveParams () {
      if (this.$zircle.getParams() !== undefined) {
        return this.$zircle.getParams().room
      }
    }
  },
  methods: {
    log (data) {
      console.log(data)
    },
    showMe (scene) {
      if (this.activeScene !== scene) {
        this.progress = 5
        this.activeScene = scene
        this.msg = 'Activating devices...'
        var vm = this
        var id = setInterval(function () {
          if (vm.progress >= 100) {
            clearInterval(id)
            vm.progress = 0
            vm.msg = scene.msg
          } else if (vm.progress === 40) { 
            vm.msg = 'Applying rules...'
            if (scene === 'Relax') {
              vm.devices = [
                {name: 'AC', state: 'on', temp: {qty: 24, unit: '˚C', min: 18, max: 32}},
                {name: 'TV', state: 'off', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-tv', view: 'tv'},
                {name: 'Hifi', state: 'on', vol: 14, icon: 'fas fa-music'},
                {name: 'Ambient light', state: 'off', icon: 'far fa-lightbulb'}
              ]
            } else if (scene === 'Theatre') {
              vm.devices = [
                {name: 'AC', state: 'on', temp: {qty: 18, unit: '˚C', min: 18, max: 32}},
                {name: 'TV', state: 'on', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-tv', view: 'tv'},
                {name: 'Hifi', state: 'off', vol: 14, icon: 'fas fa-music'},
                {name: 'Ambient light', state: 'off', icon: 'far fa-lightbulb'}
              ]
            } else if (scene === 'Party') {
              vm.devices = [
                {name: 'AC', state: 'on', temp: {qty: 20, unit: '˚C', min: 18, max: 32}},
                {name: 'TV', state: 'off', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-tv', view: 'tv'},
                {name: 'Hifi', state: 'on', vol: 14, icon: 'fas fa-music'},
                {name: 'Ambient light', state: 'on', icon: 'far fa-lightbulb'}
              ]
            }
            vm.progress ++
          } else {
            vm.progress ++
          }
        }, 20)
      } else {
        this.msg = 'This scene is already activated'
      }
    }
  },
  created () {
    this.showMe('Relax')
  }
}
</script>

