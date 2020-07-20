<template>
  <div id="app">
    <comment :comments="commentData"></comment>
  </div>
</template>

<script>
import * as CommentData from "../mock/data";
import comment from "./components/comment";

export default {
  components: {
    comment
  },
  data() {
    return {
      commentData: []
    };
  },
  created() {
    this.commentData = CommentData.comment.data;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
