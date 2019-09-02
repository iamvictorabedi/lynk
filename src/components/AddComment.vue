<template>
  <div id="add-comments">
    <div class="container">
      <form @submit="addComment">
        <input id="comment" placeholder="Add Comment" v-model="comment" type="text" />
        <button type="submit" class="btn btn-success">Add Comment</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: ''
    };
  },
  methods: {
    addComment(e) {
      e.preventDefault();
      const newComment = {
        comment: this.comment,
        status: "NEW",
        time: new Date(),
        reply: null
      };
      this.$store.commit("addComment", newComment);
    }
  }
};
</script>

<style scoped>
</style>
