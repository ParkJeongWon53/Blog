<template>
  <div class="container">
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
          <p>HTML입니다. 웹표준을 준수합니다.</p>
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
          <p>scss. 웹표준을 준수합니다.</p>
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
          <p>Vuex</p>
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

.card_box {
    float:left;
    margin:15px;
    margin-top: 40px;
    perspective:500px; 
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
}

img {
  width: 100%;
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
.card div {
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
}
.card_box:hover .card {
    transform:rotateY(180deg);
}
</style>