<template>
  <div class="contact">
    <div class="photo">
      <img
        :src="image"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ github }}</div>
    <div>{{ email }}</div>
    <div>{{ phone }}</div>
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
    },
    github() {
      return this.$store.state.contact.github
    },
    email() {
      return this.$store.state.contact.email
    },
    phone() {
      return this.$store.state.contact.phone
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.contact {
  text-align: center;
  .photo {
    position: relative;
    width: 240px;
    height: 240px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: white;
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 40px;
    font-family: 'Noto Sans KR', sans-serif;
    margin-bottom: 20px;
  }
}
  
</style>