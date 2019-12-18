<template>
  <div class="article-detail">
     <TuiEditorViewer :value="detail.body" />
    <!-- {{detail.body}} -->
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$router.history.current.params.id)
  },
  async asyncData(context) {
    const detail = await context.app.$axios.post('api/article/one', {id: context.params.id}).then(res => {
      return res.data.data
    })
    return {
      detail
    }
  },
}
</script>
<style lang="less">
  .article-detail {
    width: 770px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.55);
    padding: 15px;
  }
</style>