<template>
  <!-- usar este esquema: /pagina/:id/param1/:param1/paramn/:paramn. poner validador de alguna forma -->
   <!-- ouser este esquema "{ name: 'user', params: { userId: 123 }}" ventajas ... es como vue-router -->
  <z-view name="collectION">

    <section slot="extension">
      
      <z-view-list
        :items="collection"
        :per-page="3">
          <z-view-list-item
            slot-scope="props"
            :index="props.index"
            :color="props.color"
            :to-view="{ name: 'item', params: { fruit: props.name}}"
            :label="'B ' + props.name">
              <h1 slot="label"> {{props.index}}</h1>
          </z-view-list-item>
      </z-view-list>
    </section>
</z-view>
</template>
<script>
export default {
  data () {
    return {
      collection: [{name: 'Apple', color: 'red'}, {name: 'Apple1', color: 'green'}, {name: 'Apple2', color: 'yellow'}, {name: 'Apple3', color: 'purple'}]
    }
  }
}
</script>
