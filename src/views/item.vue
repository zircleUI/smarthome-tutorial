<template>
  <z-view name="ITem"> {{retrieveParams}}
    <z-nav slot="extension"
      to-view='search'
      :distance='130'
      :angle='30'
      size='small' >
    </z-nav>
  </z-view>
</template>
<script>
/*eslint-disable*/
// just $router.params.fruit
export default {
  computed: {
    retrieveParams () {
      if (this.$zircle.getParams() !== undefined) {
        return this.$zircle.getParams().fruit
      }
    }
  }
}
</script>

