<template>
  <z-view>
    <form action="search_submit" method="get" accept-charset="utf-8">
      <input type="text" name="devices">
    </form>
  <div slot="extension">
         <z-spot
          :angle="45"
          size="m"
          :distance="120"
          label="Search"
          to-view="devices">
          <i class="fa fas-search"></i>
        </z-spot>
    </div>
  </z-view>
</template>
<script>
export default {
  data () {
    return {
      scene: 'Night scene'
    }
  },
  mounted () {
  }
}
</script>
