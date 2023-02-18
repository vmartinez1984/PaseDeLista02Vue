<template>
  <MenuAdmin/>   
  <router-view/>
</template>

<script>
import MenuAdmin from './templates/menu-admin.vue';

export default {
    name: "App",
    components: { MenuAdmin }
}
</script>