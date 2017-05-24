<template>
  <footer id="RealWorldFooter">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="logo-font">conduit</router-link>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
</template>
<script>
  export default {
    name: 'RealWorldFooter',
  };
</script>
<style scoped>
</style>
