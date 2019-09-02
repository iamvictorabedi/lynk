<template>
  <div id="trashed-comments">
    <h1>Trashed Comments</h1>
    <ul>
      <li v-for="comment in comments">
        <span>Comment {{comment.comment}}</span>
        <span>Status {{comment.status}}</span>
        <span>Date: {{comment.time}}</span>
        <span>Reply: {{comment.reply}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    comments(){
      return this.$store.getters.getTrashedComments;
    }
  }
};
</script>

<style scoped>
</style>
