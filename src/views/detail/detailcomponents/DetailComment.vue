<template>
  <div v-if="Object.keys(comments).length !== 0" class="comment-info">
    <div class="info-header">
        <div class="header-title"><span>用户评价</span></div>
        <div class="header-more">
          <span>更多</span>
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="comments.list[0].user.avatar" alt="">
        <span>{{comments.list[0].user.uname}}</span>
        <div class="content-info">{{comments.list[0].content}}</div>
        <div class="style">
          <span>{{comments.list[0].created | showDate}}</span>
          <span>{{comments.list[0].style}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComment',
  props:{
    comments: {
      type: Object
  }
  },
  filters: {
    showDate(value) {
      let date = new Date(value*1000);
      return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
    }
  }
}

</script>
<style scoped>
.comment-info{
  padding-bottom: 20px;
  border-bottom: 5px solid #f5f5f5;
}
.info-header{
  padding-top: 10px;
  border-top: 7px solid #f6f6f6;
  height: 50px;
  line-height: 50px;
  border-bottom: 3px solid #f5f5f5;

}
.arrow-right {
  border-top: 1px solid #999;
  border-left: 1px solid #999;
  width: 9px;
  height: 9px;
  background-color: transparent;
  transform: rotate(135deg);
  display: inline-block;
  margin-left: .1rem;
}
.info-user {
  padding: 10px 0 5px;
}
.info-user span {
  position: relative;
  top: -15px;
  margin-left: 10px;
}
.info-user img{
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.header-title{
  float: left;
  font-size: 15px;
}
.header-more{
  float: right;
  font-size: 13px;
  margin-right: 15px;
}
.content-info {
  color: rgb(110, 109, 109);
}
.style{
  margin-top: 15px;
  font-size: 10px;
  color: #9c9c9c;
}
</style>