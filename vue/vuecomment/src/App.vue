<template>
  <div id="app">
    <div class="wrapper">
      <div class="comment-input">
        <div class="comment-field">
          <span class="comment-field-name">用户名：</span>
          <div class="comment-field-input">
            <input type="text" v-model="username">
          </div>
        </div>
        <div class="comment-field">
          <span class="comment-field-name">评论：</span>
          <div class="comment-field-input">
            <textarea v-model="content"></textarea>
          </div>
        </div>
        <div class="comment-field">
          <button class="comment-field-button" @click="getComment">提交</button>
        </div>
        <div class="comment-list" v-if="comments.length">
          <div v-for="(comment,index) in comments">
            {{comment.username}}:{{comment.content}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        username: '',
        content: '',
        comments: []
      }
    },
    methods: {
      getComment() {
        this.comments.push({
          username: this.username,
          content: this.content
        })
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #fbfbfb;
  }

  .wrapper {
    width: 500px;
    margin: 10px auto;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    padding: 20px;
  }

  /* 评论框样式 */
  .comment-input {
    background-color: #fff;
    border: 1px solid #f1f1f1;
    padding: 20px;
    margin-bottom: 10px;
  }

  .comment-field {
    margin-bottom: 15px;
    display: flex;
  }

  .comment-field .comment-field-name {
    display: flex;
    flex-basis: 100px;
    font-size: 14px;
  }

  .comment-field .comment-field-input {
    display: flex;
    flex: 1;
  }

  .comment-field-input input,
  .comment-field-input textarea {
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    padding: 5px;
    outline: none;
    font-size: 14px;
    resize: none;
    flex: 1;
  }

  .comment-field-input textarea {
    height: 100px;
  }

  .comment-field-button {
    display: flex;
    justify-content: end;
    flex-direction: row;
  }

  .comment-field-button button {
    padding: 5px 10px;
    width: 80px;
    border: none;
    border-radius: 3px;
    background-color: #00a3cf;
    color: #fff;
    outline: none;
    cursor: pointer;
  }

  .comment-field-button button:active {
    background: #13c1f1;
  }

  /* 评论列表样式 */
  .comment-list {
    background-color: #fff;
    border: 1px solid #f1f1f1;
    padding: 20px;
  }

  /* 评论组件样式 */
  .comment {
    display: flex;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 10px;
    padding-bottom: 10px;
    min-height: 50px;
  }

  .comment .comment-user {
    flex-shrink: 0;
  }

  .comment span {
    color: #00a3cf;
    font-style: italic;
  }

  .comment p {
    margin: 0;
    /*text-indent: 2em;*/
  }

</style>
