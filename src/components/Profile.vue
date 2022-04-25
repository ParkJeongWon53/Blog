<template>
  <div class="container">
    <div class="title">
      <p>여러가지 만들기 좋아하는 개발자입니다.</p>
    </div>

    <div class="profile">
      <div class="photo">
        <img
          :src="image"
          :alt="name" />
      </div>
      
      <div class="detail">
        <ul>
          <li>
            <p>웹을 구현하고 더 나은 품질과 사용자 편의성을 추구합니다.</p>
          </li>
          <li>
            <p>배우는것에 즐거움을 느끼며, 끝까지 파고듭니다.</p>
          </li>
          <li>
            <p>꾸준한 발전으로 최고가 되고자 합니다.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.state.contact.image
    },
    name() {
      return this.$store.state.contact.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

  .container{
    .title{
      p {
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 30px;
        text-align: center;
        color: $dark;
        background-color: rgba(158, 158, 158, 0.271) ;
        border-radius: 10px;
        height: 50px;
        // text-align: center
        line-height: 50px;
      }
    }
    .profile{
    // position: relative;
    // height: 300px;
    // background-color: yellowgreen ;
    align-items: center;
    // display: flex;

    .photo {
    // position: absolute;
    right: 0;
    width: 240px;
    height: 240px;
    margin: 20px auto 20px;
    padding: 35px;
    border: 10px solid $primary;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: white;
      img {
        width: 100%;
      }
    }
    .detail {
      // position: absolute;
      // height: 240px;
      // left: 0;
      // top: 0;
      // padding: 30px 0;
      // margin-right: 50px;
      // background-color: orangered;
      p {
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 25px;
        text-align: center;
        color: $dark;
        // background-color: orchid ;
      }
    }
  }
}
</style>