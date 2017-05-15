<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"><img v-bind:src="article.author.image" /></a>
      <div class="info">
        <a href="" class="author">{{article.author.username}}</a>
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
