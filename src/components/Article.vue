<template>
	<div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>

        <div class="article-meta">
          <a href=""><img v-bind:src="article.author.image" /></a>
          <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
          </button>
        </div>

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12">
          <p>
          {{ article.body }}
          </p>
          <ul class="tag-list">
            <li class="tag-default tag-pill tag-outline" v-for="tag in article.tagList">
              {{ tag }}
            </li>
        </ul>
        </div>
      </div>

      <hr />

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <form class="card comment-form">
            <div class="card-block">
              <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
            </div>
            <div class="card-footer">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">
               Post Comment
              </button>
            </div>
          </form>
          
          <div class="card">
            <div class="card-block">
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              </a>
              &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
            </div>
          </div>
          
        </div>

      </div>

    </div>

  </div>
</template>
<script>

export default {
  name: 'article',
  created() { },
  methods: { },
  data() {
    return {
      slug: this.$route.params.id,
      article: null,
    };
  },
};
</script>
<style scoped>
  
</style>
