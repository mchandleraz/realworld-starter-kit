<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign In</h1>
          <p class="text-xs-center">
            <router-link to="register">Need an account?</router-link>
          </p>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input type="email" class="form-control form-control-lg" placeholder="Email" autocomplete="off">
              </fieldset>
              <fieldset class="form-group">
                <input type="password" class="form-control form-control-lg" placeholder="Password" autocomplete="off">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" type="submit">Sign in</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealWorldLogin',
};
</script>
