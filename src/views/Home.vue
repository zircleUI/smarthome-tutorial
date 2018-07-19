<template>
  <z-view name="home">
  11:53 PM <br>
  Monday, October 2018
  <h1>Welcome</h1>
  Outside <br>
  29 C Sunny
  <div slot="extension">
        <z-nav
          :angle="225"
          size="m"
          :distance="130"
          label="Favorites"
          to-view="collection">3
        </z-nav>
        <z-nav
          :angle="-90"
          size="s"
          :distance="130"
          label="Rooms"
          to-view="collection">4
        </z-nav>
        <z-nav
          :angle="-45"
          :distance="130"
          size="s"
          label="Devices"
          to-view="collection">5
        </z-nav>
    <z-nav
      :angle="0"
      :distance="120"
      label="Automation"
      to-view="collection">0
    </z-nav>
    <z-nav
      :angle="3"
      :distance="120"
      size="xl"
      to-view="collection">
      All it'1s Ok
    </z-nav>
    <z-nav
      :angle="140"
      :distance="120"
      label="Settings"
      to-view="collection">...
    </z-nav>
    </div>
  </z-view>
</template>
