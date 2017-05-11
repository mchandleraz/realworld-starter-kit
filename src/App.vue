<template>
  <div id="app">
    <real-world-header />
    <router-view></router-view>
    <real-world-footer />
  </div>
</template>

<script>
import RealWorldHeader from '@/components/Header';
import RealWorldFooter from '@/components/Footer';


export default {
  name: 'app',
  components: {
    RealWorldHeader, RealWorldFooter,
  },
};
</script>

<style>
</style>
