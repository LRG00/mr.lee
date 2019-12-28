<template>
  <div class="music">
    music
    {{detail}}
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const detail = await context.app.$axios.post('api/music/list', {}).then(res => {
      return res.data.data
    })
    return {
      detail
    }
  },
}
</script>
<style lang="less">
  .music {
    max-width: 770px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.55);
    padding: 15px;
  }
</style>