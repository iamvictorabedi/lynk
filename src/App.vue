<template>
  <div id="app">
    <add-comments></add-comments>
    <comments></comments>
    <replied-comments></replied-comments>
    <deleted-comments></deleted-comments>
    <trashed-comments></trashed-comments>
  </div>
</template>

<script>
import Comments from './components/Comments.vue'
import AddComments from './components/AddComment.vue'
import DeletedComments from './components/DeleltedComments.vue'
import RepliedComments from './components/RepliedComments.vue'
import TrashedComments from './components/TrashedComments.vue'
export default {
  components: {
    'add-comments': AddComments,
    'comments': Comments,
    'replied-comments': RepliedComments,
    'deleted-comments': DeletedComments,
    'trashed-comments': TrashedComments
  },
  name: "app",
  data() {
    return {};
  }
};
</script>

<style>
body {
  font-family: "Ubuntu";
  color: #555;
}
</style>
