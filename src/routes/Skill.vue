<template>
  <div class="container">
    <div class="care_wrap">
      <div class="card_box">
        <div class="card html">
          <div class="card_front">
            <div class="img">
              <img 
                :src="html"  
                alt="html" />
            </div>
          </div>
          <div class="card_back">
            <p>웹표준을 준수합니다.</p>
          </div>
        </div>
      </div>

      <div class="card_box">
        <div class="card css">
          <div class="card_front">
            <div class="img">
              <img 
                :src="css"  
                alt="css" />
            </div>
          </div>
          <div class="card_back">
            <p>텍스트, 배경화면, 애니메이션 등 사용</p>
          </div>
        </div>
      </div>

      <div class="card_box">
        <div class="card scss">
          <div class="card_front">
            <div class="img">
              <img 
                :src="scss"  
                alt="scss" />
            </div>
          </div>
          <div class="card_back">
            <p>CSS와 거의 같은 문법을 지원하는 SCSS 를 사용합니다.</p>
          </div>
        </div>
      </div>

      <div class="card_box">
        <div class="card script">
          <div class="card_front">
            <div class="img">
              <img 
                :src="script"  
                alt="script" />
            </div>
          </div>
          <div class="card_back">
            <p>ES6 문법, Promise, Event 등 사용</p>
          </div>
        </div>
      </div>

      <div class="card_box">
        <div class="card vue">
          <div class="card_front">
            <div class="img">
              <img 
                :src="vue"  
                alt="vue" />
            </div>
          </div>
          <div class="card_back">
            <p>싱글 페이지 애플리케이션 </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    html() {
      return this.$store.state.skill.html
    },
    css() {
      return this.$store.state.skill.css
    },
    scss() {
      return this.$store.state.skill.scss
    },
    script() {
      return this.$store.state.skill.script
    },
    vue() {
      return this.$store.state.skill.vue
    }
  }
}
</script>




<style lang="scss" scoped>
@import "~/scss/main.scss";

.container{
  .care_wrap {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card_box {
      margin:15px;
      perspective:1000px; 
      &:hover {
        .card {
          transform:rotateY(180deg);
        }
      }
      .card {
        width:300px;
        height:300px;
        font-size:40px; 
        line-height:1.5;
        text-align:center;
        box-shadow:0 30px 30px rgba(0,0,0,.5); 
        position:relative;
        transition:0.5s;
        transform-style:preserve-3d; /* 자식들을 3D로 변환시킴 */ 
        div {
          position:absolute;
          left:0;
          top:0;
          width:100%;
          height:100%;
          backface-visibility:hidden;
        }
        .card_back {
            font-size:20px;
            transform:rotateY(-180deg);
            display: table;
            p{
              display: table-cell;
              vertical-align: middle;
            }
        }
        img {
          width: 100%;
        }
      }

      .html {
          background:#ff9f7e;
      }
      .css {
          background:#84afd2;
      }
      .scss {
          background:#fabbdd;
      }
      .script {
          background:#ffefa3;
          img {
            width: 88%;
          }
      }
      .vue {
          background:#a7ffd8;
      }
    }
  }
}



</style>