<template>
  <div class="post-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div class="post-meta">
          <a href=""><img v-bind:src="article.author.image" /></a>
          <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">January 20th</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }}<span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">(29)</span>
          </button>
        </div>
      </div>
    </div>
    <div class="container page">
      <div class="row post-content">
        <div class="col-md-12">
          <p>
          Web development technologies have evolved at an incredible clip over the past few years.
          </p>
          <h2 id="introducing-ionic">Introducing RealWorld.</h2>
          <p>It's a great solution for learning how other frameworks work.</p>
        </div>
      </div>
      <hr />
      <div class="post-actions">
        <div class="post-meta">
          <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow Eric Simons <span class="counter">(10)</span>
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">(29)</span>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint no-unused-vars: "off" */
import { mapMutations } from 'vuex';
import CONSTANTS from '@/constants/Home.constants';
import { FETCH_ARTICLE } from '../store/actionTypes';

export default {
  name: 'RealWorldArticle',
  beforeMount() {
    const articleSlug = this.$route.params.id;

    // Pass argument to action
    // ie. https://forum.vuejs.org/t/vuex-how-to-pass-an-argument-to-the-action-in-component-when-using-mapactions/3846
    this.$store.dispatch(FETCH_ARTICLE, articleSlug);
  },
  computed: {
    article() {
      return this.$store.state.article.article;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
