<template>
  <z-view style="border-width: 6px"  label="Console">
    <ul>
      <li v-for="(log, index) in console" :key="index">
        {{log}}
      </li>
    </ul>
    <div slot="extension">
      <z-spot
        v-show="console.length > 1"
        button
        :angle="45"
        size="s"
        :distance="120"
        label="Reset"
        @click.native="openDialog = true">
          <i class="fas fa-trash"></i>
      </z-spot>
      <z-dialog v-if="openDialog" self-close v-on:done="openDialog = false">
        Are your sure?
        <div slot=extension>
          <z-spot
          class="success"
          button
          :angle="45"
          size="s"
          :distance="120"
          @click.native="reset">
            <i class="fas fa-check"></i>
          </z-spot>
          <z-spot
          class="danger"
          button
          :angle="135"
          size="s"
          :distance="120"
          @click.native="openDialog = false">
            <i class="fas fa-times"></i>
          </z-spot>
        </div>
      </z-dialog>
    </div>
  </z-view>
</template>
<script>
export default {
  data () {
    return {
      openDialog: false,
      console: [
        '12:30pm - Mary arrived home',
        '12:34pm - Peter arrived home',
        '1:30pm - Relax scene activated',
        '1:50pm - Peter arrived home',
        '4:00pm - Away scene activated',
        '5:10pm - Movement detected',
        '5:10pm - Video alert sent to Peter',
        '6:00pm - At Home scene activated',
        '6:01pm - Ambient lights turned on',
        '6:01pm - Playing Mary music list',
        '6:15pm - Problem with camera device',
        '6:16pm - Camera is working after reset',
        '6:45pm - Ambient lights turned off',
        '7:01pm - Theatre turned on',
        '8:00pm - Night scene activaded'
      ]
    }
  },
  methods: {
    reset () {
      this.console = ['No events available']

      this.openDialog = false
    }
  }
}
</script>
<style>
li {
  line-height: 40px;
  border-bottom: 1px solid white
}
</style>
