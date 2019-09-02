<template>
  <div id="comments">
    <h1>New Comments</h1>
    <div class="comments-sec" v-for="comment in comments" :key="comment.id">
      <div class="comments-view">
        <div class="comment">Comment: {{comment.comment}}</div>
        <div class="status">Status: {{comment.status}}</div>
        <div class="date">Date: {{comment.time}}</div>
        <button @click="reply(comment.id)">Reply</button>
        <button @click="deleteComment(comment.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reply: ""
    };
  },
  methods: {
    replyComment(commentId) {
      console.log("data", comment);
      // this.$store.commit("replyComment", null);
    },
    deleteComment(commentId) {
      console.log("data", comment);
      this.$store.commit("deleteComment", commentId);
    }
  },
  computed: {
    comments() {
      return this.$store.getters.getNewComments;
    }
  }
};
</script>

<style scoped>
#comments {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.comments-sec {
  padding: 0;
  list-style-type: none;
}
.comments-view {
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
