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
          <real-world-post-preview
            v-for="(article, index) in articles"
            v-bind:article="article"
            v-bind:index="index"
            v-bind:key="article.title">
          </real-world-post-preview>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <real-world-tag-list
              v-bind:tags="tags"
            ></real-world-tag-list>
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
import RealWorldPostPreview from './PostPreview';
import RealWorldTagList from './TagList';

export default {
  name: 'home',
  created() {
    postsService.get().then((response) => {
      this.assignDataByKey(response.data, 'articles');
    });

    tagsService.get().then((response) => {
      this.assignDataByKey(response.data, 'tags');
    });
  },
  methods: {
    assignDataByKey(data, key) {
      if (typeof key !== 'string') {
        throw new Error('Key Param must be a String.');
      }

      if (data[key] === undefined) {
        throw new Error(`Can't find ${key} on data Object.`);
      }

      this.$set(this, key, data[key]);
    },
  },
  data() {
    return {
      bannerMessage: CONSTANTS.BANNER_MESSAGE,
      articles: null,
      tags: null,
    };
  },
  components: {
    RealWorldPostPreview,
    RealWorldTagList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
