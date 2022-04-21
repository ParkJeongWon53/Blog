<template>
  <RouterLink to="/" class="logo">
    현대의 <span>헤파이토스</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main.scss";

  .logo {
    font-family: 'Jua', sans-serif;
    font-size: 20px;
    color: $black;
    text-decoration: none;
    &:hover {
      color: $black;
    }
    span {
      color: $primary;
    }
  }
</style>