<template>
  <header>
    <Logo />
    <input
      type="checkbox"
      id="menuicon" />
    <label for="menuicon">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <div class="sidebar">
      <ul>
        <li>
          <a href="https://benevolent-biscochitos-46a629.netlify.app/#/skill">Skill</a>
        </li>
        <li>
          <a href="https://benevolent-biscochitos-46a629.netlify.app/#/protfolio">Protfolio</a>
        </li>
        <li>
          <a href="https://benevolent-biscochitos-46a629.netlify.app/#/contact">Contact</a>
        </li>
      </ul>
    </div>
    <div
      class="user"
      @click="goContact">
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
    methods: {
      goContact() {
      console.log('!!!')
      this.$router.push('/contact')
    }
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
      left: 200px;
      margin: auto;
      &:hover {
        background-color: darken($gray-200, 10%);
      }
      img {
        width: 100%;
      }
    }


// 메뉴 아이콘 설정
  input {
    display: none;
  }
  input[id="menuicon"] + label {
    display: block;
    width: 50px;
    height: 30px;
    position: fixed;
    right: 15px;
    top: calc(5% - 15px);
    cursor: pointer;
    transition: all 0.3s;
    z-index: 2;
  }
  input[id="menuicon"]:checked + label {
    right: 300px;
  }
  input[id="menuicon"] + label span {
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 30px;
    background: black;
    transition: all 0.3s;
  }
  input[id="menuicon"] + label span:nth-child(1) {
    top: 0;
  }
  input[id="menuicon"] + label span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  input[id="menuicon"] + label span:nth-child(3) {
    bottom: 0;
  }

  input[id="menuicon"]:checked + label span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  input[id="menuicon"]:checked + label span:nth-child(2) {
    opacity: 0;
  }
  input[id="menuicon"]:checked + label span:nth-child(3) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }

  .sidebar {
    width: 300px;
    height: 100%;
    background-color: $gray-500;
    position: fixed;
    top: 0;
    right: -300px;
    z-index: 1;
    transition: all .3s;
    li{
      padding-top: 20px;
      a{
        font-size: 25px;
        text-decoration: none;
        
      }
    }
    
  }
  input[id="menuicon"]:checked + label + div {
    right: 0;
    
  }


    @include media-breakpoint-down(sm) {
      header{
        position: relative;
        .nav {
          // display: none;
          // height: 70px;
          // padding: 0 40px;
          // display: flex;
          align-items: center;
          position: absolute;
          right: 0;
          top: 0;
          color: red;
          background-color: green;
          .nav-item {
            color: red;
          }
        }
        
      }
    }
  }
</style>