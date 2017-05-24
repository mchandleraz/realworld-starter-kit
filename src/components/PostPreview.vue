<template>
  <div class="article-preview">
    <div class="article-meta">
      <router-link :to="{ name: 'user', params: { username: article.author.username }}"><img v-bind:src="article.author.image" /></router-link>
      <div class="info">
        <router-link :to="{ name: 'user', params: { username: article.author.username }}" class="author">{{article.author.username}}</router-link>
        <span class="date">{{article.createdAt | date}}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{article.favoritesCount}}
      </button>
    </div>
    <a href="" class="preview-link">
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
      <span>Read more...</span>
    </a>
  </div>
</template>

<script>

export default {
  name: 'RealWorldPostPreview',
  data() {
    return {};
  },
  props: ['article'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
