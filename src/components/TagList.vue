<template>
  <div class="tag-list">
    <a v-for="(tag, index) in tags" href="" class="label label-pill label-default">{{tag}}</a>
  </div>
</template>

<script>
export default {
  name: 'TagList',
  props: ['tags'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
