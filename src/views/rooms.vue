<template>
  <z-view>
    Rooms
    <section slot="extension">
      <z-list
        :items="rooms"
        :per-page="3">
          <z-spot
            :distance="60"
            slot-scope="props"
            :index="props.index"
            :to-view="props.name"
            :label="props.name"
            :image-path="props.image"
            label-pos="bottom">
            <z-spot slot="extension"
              v-if="props.status"
              style="background-color: red; border: none;"
              :angle='-45'
              size='xxs'>
            </z-spot>
          </z-spot>
      </z-list>
      <z-spot
        button
        :angle="45"
        size="s"
        :distance="120"
        label="Add"
        @click.native="openDialog = true">
          <i class="fas fa-plus"></i>
      </z-spot>
      <z-dialog v-if="openDialog" self-close v-on:done="openDialog = false">
        Add a new room?
        <div slot=extension>
          <z-spot
          class="success"
          button
          :angle="45"
          size="s"
          :distance="120"
          @click.native="openDialog = false">
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
    </section>
</z-view>
</template>
<script>
export default {
  data () {
    return {
      rooms: [
        {name: 'Living', devices: 6, image: './living.jpg'},
        {name: 'Bedroom', devices: 2, status: 'alert'},
        {name: 'Kitchen', devices: 5},
        {name: 'Studio', devices: 1},
        {name: 'Bath', devices: 1}
      ],
      openDialog: false
    }
  }
}
</script>
