<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div class="user" @click="goContact">
      <img 
        :src="emoji" 
        :alt="name" />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Skill',
          href: '/skill'
        },
        {
          name: 'Protfolio',
          href: '/protfolio'
        },
        {
          name: 'Contact',
          href: '/contact'
        },
      ]
    }
  },
  computed: {
    emoji() {
      return this.$store.state.contact.emoji
    },
    name() {
      return this.$store.state.contact.name
    }
  },
  goContact() {
    this.$router.push('/contact')
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

  header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    position: relative;
    .logo {
      margin-right: 40px;
    }
    .user {
      width: 40px;
      height: 40px;
      padding: 6px;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: $gray-200;
      cursor: pointer;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      margin: auto;
      &:hover {
        background-color: darken($gray-200, 10%);
      }
      img {
        width: 100%;
      }
    }
    @include media-breakpoint-down(sm) {
      .nav {
        display: none;
      }
    }
  }
</style>