<template>
  <div id="app">
    <real-world-header />
    <router-view></router-view>
  </div>
</template>

<script>
import RealWorldHeader from '@/components/Header';

export default {
  name: 'app',
  components: {
    RealWorldHeader,
  },
};
</script>

<style>
</style>
