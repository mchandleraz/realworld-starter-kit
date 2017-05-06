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
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Articles</a>
              </li>
            </ul>
          </div>

          <div v-for="article in articles" class="article-preview">
            <div class="article-meta">
              <a href=""><img :src="article.author.image" /></a>
              <div class="info">
                <a href="" class="author">{{ article.author.username }}</a>
                <span class="date">{{ article.createdAt }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul v-for="tag in article.tagList" class="tag-list">
                <li class="tag-default tag-pill tag-outline">{{ tag }}</li>
              </ul>
            </a>
          </div>


        </div>

      </div>
    </div>

  </div>
</template>
<script>
import usersService from '@/services/usersService';

export default {
  name: 'profile',
  created() {
    usersService.getUser(this.username).then((response) => {
      this.assignDataByKey(response.data, 'profile');
    });
    usersService.getUserArticles(this.username).then((response) => {
      this.assignDataByKey(response.data, 'articles');
    });
    usersService.getUserFavorites(this.username).then((response) => {
      this.assignDataByKey(response.data, 'articles');
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
      username: this.$route.params.username,
      profile: null,
      articles: null,
    };
  },
};
</script>
<style scoped>
  
</style>
