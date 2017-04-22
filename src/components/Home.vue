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
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>
          <post-preview
            v-for="(article, index) in articles"
            v-bind:article="article"
            v-bind:index="index"
            v-bind:key="article.title">
          </post-preview>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <tag-list
              v-bind:tags="tags"
            ></tag-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint no-unused-vars: "off" */
import CONSTANTS from '@/constants/Home.constants';
import postsService from '@/services/postsService';
import tagsService from '@/services/tagsService';
import PostPreview from './PostPreview';
import TagList from './TagList';

export default {
  name: 'home',
  created() {
    postsService.get().then((response) => {
      if (response.status === 200) {
        this.$set(this, 'articles', response.data.articles);
      }
    });

    tagsService.get().then((response) => {
      if (response.status === 200) {
        this.$set(this, 'tags', response.data.tags);
      }
    });
  },
  data() {
    return {
      bannerMessage: CONSTANTS.BANNER_MESSAGE,
      articles: null,
      tags: null,
    };
  },
  components: {
    PostPreview,
    TagList,
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
