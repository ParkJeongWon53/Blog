<template>
  <div class="container">
    <div class="box_wrap">
      <div class="title">
        <p>영화검색 사이트 </p>
      </div>
      <div class="box">
        <div class="photo">
          <img
            :src="omdbapi"
            alt="omdbapi" />
        </div>
        <div class="site">
          <a href="https://github.com/ParkJeongWon53/Movie-App">github</a><br />
          <a href="https://modest-wozniak-58eb16.netlify.app">사이트 방문</a>
        </div>
        <div class="explanation">
          <ul>
            <li>Vue 학습을 위한 예제학습</li>
            <li>Vue와 SCSS로 프론트엔드 작업</li>
            <li>Bootstrap 으로 크기에 따라 변하는 반응형페이지 구현</li>
            <li>Vuex를 사용하여 상태관리를 용이하게함</li>
            <li>스켈레톤 UI와 로딩구현</li>
          </ul>
        </div>
      </div>

      <div class="title">
        <p>포트폴리오</p>
      </div>
      <div class="box">
        <div class="photo">
          <img
            :src="protfolio"
            alt="protfolio" />
        </div>
        <div class="site">
          <a href="https://github.com/ParkJeongWon53/Blog">github</a><br />
          <a href="https://benevolent-biscochitos-46a629.netlify.app">사이트 방문</a>
        </div>
        <div class="explanation">
          <ul>
            <li>포트폴리오 용도로 제작한 웹사이트</li>
            <li>Vue와 SCSS로 프론트엔드 작업</li>
            <li>크기에 따라 변하는 반응형페이지 구현</li>
            <li>Vuex를 사용하여 상태관리를 용이하게함</li>
            <li>지속적인 업로드</li>
          </ul>
        </div>
      </div>

      <div class="title">
        <p>메모장</p>
      </div>
      <div class="box">
        <div class="photo">
          <img
            :src="ready"
            alt="ready" />
        </div>
        <div class="site">
          <a href="">github</a><br />
          <a href="">사이트 방문</a>
        </div>
        <div class="explanation">
          <ul>
            <li>업로드 예정</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    ready() {
      return this.$store.state.protfolio.ready
    },
    omdbapi() {
      return this.$store.state.protfolio.omdbapi
    },
    protfolio() {
      return this.$store.state.protfolio.protfolio
    }
  }
}
</script>



<style lang="scss" scoped>
@import "~/scss/main.scss";

.title {
  font-size: 30px;
  font-weight: 400;
  text-align: center;
}
.box {
  background-color: $gray-300;
  width:700px;
  height:400px;
  border:3px solid #000;
  margin:50px auto;
  position:relative;
  div {
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
  }
  .photo {
    width:350px;
    z-index:3;
    transition:1s;
    // display: none;
    img {
      width: 100%;
    }
  }
  .explanation {
    width:280px;
    height:200px;
    overflow: hidden;
    background-color: $teal-500;
    z-index:2;
    transition-property:top, left, background-color, height, border-radius;
    transition-duration:1s, 1s, 0.5s, 0.5s ,0.5s;
    transition-delay:0s, 1s, 1s, 1s, 0s; 
    ul{
      padding: 0 10px;
      left: 10px;
      margin: 20px 0;
      font-size: 18px;
      li{
        margin-top: 8px;
        &:before {
          content: "*";
          display: inline-block;
          vertical-align: middle;
          padding: 5px;
        }
      }
    }
  }
  .site {
    width:200px;
    height:80px;
    // background-color:green;
    z-index:1;
    transition-property:top, left;
    transition-duration:1s, 0.5s;
    transition-delay:0s, 1s;
    a {
      width: 150x;
      height: 50px;
      border-radius: 20px;
      text-decoration: none;
      display: block;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      color: $black;
      background-color: $green-300;
      &:hover {
        background-color: $green-400;
      }
    }
  }
}
.box:hover .photo {
    left:20px;
    top:20px;
    transform:translate(0, 0);    
}
.box:hover .site {
    top:300px;
    left:190px;
}
.box:hover .explanation {
  top:200px;
  left:540px;
  height: 350px;
  background-color:$teal-200;
  border-radius:10px; 
}

@include media-breakpoint-down(sm) {
  .box {
    width: 400px;
    height: 700px;
    div{
      left:50%;
      top:50%;
    }
    .explanation {
      width:350px;
      font-size: 12px;
    }
  }
  .site {
    a {
      width: 75x;
      height: 25px;
      font-size: 12px;
    }
  }
  .box:hover .photo {
    left:20px;
    top:20px;
    transform:translate(0, 0);    
  }
  .box:hover .explanation {
    top:410px;
    left:200px;
    right:0;
    height: 300px;
    background-color:$teal-200;
    border-radius:10px; 
  }
  .box:hover .site {
    top:610px;
    left:200px;
  }
  
}
</style>