<template>
  <nav id="RealWorldHeader" class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-compose"></i>&nbsp;New Post
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link" href="">Sign up</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/login" class="nav-link">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/settings" class="nav-link" href="">Settings</router-link>
        </li>
        <!-- Add "active" class when you're on that page" -->
        <li class="nav-item active">
          <router-link to="/" class="nav-link" href="">Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'RealWorldHeader',
};
</script>

<style scoped>
</style>
