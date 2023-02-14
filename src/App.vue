<template>
   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/persons">Personas</router-link> |
    <!-- <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>  -->
    <a href="#" @click="logOut">Cerrar sesión</a>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App'  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
