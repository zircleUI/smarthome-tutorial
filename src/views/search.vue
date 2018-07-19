<template>
  <z-view name="search" label="tituelo pnafgfd fl">
    <input type="text" placeholder="Name">
    <input type="text" placeholder="Surname">
    <input type="text" placeholder="Cellphone">
    <input type="text" placeholder="Mail">
    <input type="text" placeholder="Address">
    <input type="text" placeholder="zip code">
    <input type="text" placeholder="Credit card">
    <input type="text" placeholder="ip">
    <input type="text" placeholder="passport">
    <section slot="extension">
      <z-nav
        :angle="320"
        size="small"
        to-view="search" style="border-color: purple; background-color: yellow; color: white;">
        <i class="fa fa-search-plus"></i>
        </z-nav>
      <z-nav
        to-view="home1"
        :distance='130'
        :angle='45'
        size='small'
        >hola
      </z-nav>
      <z-button
        :distance='120'
        :angle='30'
        style="background-color: purple; border-color: purple; color: white;"
        @click.native="$zircle.openDialog()"
        size='small' >
        alrt
      </z-button>
      <z-dialog timer v-if="$zircle.isDialogActive() === true" >
          <p>Proceed?</p>
           <section slot="extension">
              <z-button
                class="success"
                :distance="115"
                :angle='135'
                size='small'
                @click.native='$zircle.closeDialog()'>
                  <i class="fa fa-close"></i>
              </z-button>
              <z-button
                :distance="115"
                :angle='45'
                size='small'>
                  <i class="fa fa-check"></i>
              </z-button>
          </section>
        </z-dialog>
    </section>
  </z-view>
</template>
