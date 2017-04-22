<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>{{bannerMessage}}</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <post-preview
            v-for="(article, index) in articles"
            v-bind:article="article"
            v-bind:index="index"
            v-bind:key="article.title">
          </post-preview>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint no-unused-vars: "off" */
import CONSTANTS from '@/constants/Home.constants';
import postsService from '@/services/postsService';
import PostPreview from './PostPreview';

export default {
  name: 'home',
  created() {
    postsService.get().then((response) => {
      if (response.status === 200) {
        this.$set(this, 'articles', response.data.articles);
      }
    });
  },
  data() {
    return {
      bannerMessage: CONSTANTS.BANNER_MESSAGE,
      articles: null,
    };
  },
  components: {
    PostPreview,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
