<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">login</router-link> |
      <router-link to="/home">home</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  margin: 0;
  padding: 0;

}
html,body{
  width: 100%;
  height: 100%;
  #app {
    height: 100%;
  }
}
</style>
