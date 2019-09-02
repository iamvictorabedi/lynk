<template>
  <div id="deleted-comments">
  <h1>Deleted Comments</h1>
    <ul>
      <li v-for="comment in comments">
        <div class="comment">Comment: {{comment.comment}}</div>
        <div class="status">Status: {{comment.status}}</div>
        <div class="date">Date: {{comment.time}}</div>
        <div class="reply">Reply: {{comment.reply}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    comments(){
      return this.$store.getters.getDeletedComments;
    }
  }
}
</script>

<style scoped>
#deleted-comments {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#deleted-comments ul{
  padding: 0;
  list-style-type: none;
}
#deleted-comments li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.status {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>
