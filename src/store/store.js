import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    comments: []
  },
  mutations: {
    addComment(state, payload) {
      payload.id = Math.random()
      let comments = [...state.comments, payload];
      state.comments = comments;
    },
    deleteComment(state, payload){
      var comments = state.comments.find(({id}) => id === payload);
      comments.status ='DELETED'
      state.comments = [...state.comments];

    }
  },
  getters: {
    getNewComments: state => {
      var newComments = state.comments.filter(({ status }) => status === "NEW");
      return newComments;
    },
    getRepliedComments: state => {
      var repliedComments = state.comments.filter(
        ({ status }) => status === "REPLIED"
      );
      return repliedComments;
    },
    getDeletedComments: state => {
      var deletedComments = state.comments.filter(
        ({ status }) => status === "DELETED"
      );
      return deletedComments;
    },
    getTrashedComments: state => {
      var trashedComments = state.comments.filter(
        ({ status }) => status === "TRASHED"
      );
      return trashedComments;
    }
  },
  actions: {
  }
});
