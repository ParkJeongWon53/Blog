<template>
  <div class="container">
    <h1>
      현대의 <span>헤파이토스</span><br />
      21세기의 대장장이<br />
      개발자로 못 만드는 것은 없다.
    </h1>
    <p>
      헤파이토스는 그리스 신화에서 대장장이 신으로 실력은 초일류이며 상당히 성실한 성격이라고 묘사됩니다.<br />
      헤파이토스처럼 성실하게 공부하여 초일류적인 개발자가 되고 싶습니다.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

  .container{
    padding-top: 40px;
  }
  h1 {
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 50px;
    span {
      color: $primary;
    }
  }
  p {
      margin: 30px 0;
      color: $gray-600;
    }
  
</style>