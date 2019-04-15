<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body{
  overflow: auto;
  background-color: rgba(250, 250, 250,1);
  height: 100%;
  padding: 0px;
font-size: 14px;
color: rgba(16, 16, 16, 1);
font-family: PingFangSC-regular;
}
</style>
