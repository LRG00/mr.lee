<!--
 * @Author: liruigang
 * @Date: 2019-10-21 20:05:03
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-21 21:26:54
 * @UI: 
 -->
<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Mr.Lee
      </h1>
      <h2 class="subtitle">
        My beautiful Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub{{ tags }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'
import { FETCH_TAGS } from '~/store/actions.type'
export default {
  components: {
    Logo
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'tags']),
    tag() {
      return this.$route.params.tag
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_TAGS)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
