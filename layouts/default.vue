<template>
  <div style="background: #f0f2f5">
    <BlogHeader />
    <nuxt />
    <BlogFooter />
  </div>
</template>
<script>
import BlogFooter from './TheFooter'
import BlogHeader from './theHeader'
export default {
  components: {
    BlogFooter,
    BlogHeader
  }
}
</script>
<style></style>
