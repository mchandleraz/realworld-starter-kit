<template>
  <div class="tag-list">
    <a v-for="(tag, index) in tags" href="" class="tag-pill tag-default">{{tag}}</a>
  </div>
</template>

<script>
export default {
  name: 'RealWorldTagList',
  props: ['tags'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
