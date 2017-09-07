<template>
  <div id="app">
    <mymenu></mymenu>
    <router-view></router-view> 
  </div>
</template>

<script>
import mymenu from '@/components/mymenu'
export default {
  name: 'app',
  components: {
    mymenu
  }
}
</script>

<style>
</style>
