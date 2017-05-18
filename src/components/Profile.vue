<template>
	<div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{ profile.username }} 
            </button>
          </div>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="posts-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Posts</a>
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
      </div>
    </div>
  </div>
</template>

<script>
import RealWorldPostPreview from './PostPreview';
import { GET_USER, FETCH_USER_ARTICLES, FETCH_USER_FAVORITES } from '../store/actionTypes';

export default {
  data() {
    return {
      username: this.$route.params.username,
    };
  },
  name: 'RealWorldProfile',
  beforeMount() {
    this.$store.dispatch(GET_USER, { user: this.username });
    this.$store.dispatch(FETCH_USER_ARTICLES, { user: this.username });
    this.$store.dispatch(FETCH_USER_FAVORITES, { user: this.username });
  },
  components: {
    RealWorldPostPreview,
  },
  computed: {
    profile() {
      return this.$store.state.user.profile;
    },
    articles() {
      return this.$store.state.user.articles;
    },
    favoriteArticles() {
      return this.$store.state.user.favoriteArticles;
    },
  },
};
</script>
<style scoped>
  
</style>
