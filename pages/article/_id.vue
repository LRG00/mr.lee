<template>
  <div>
    {{detail.body}}
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$router.history.current.params.id)
  },
  async asyncData(context) {
    const detail = await context.app.$axios.post('api/article/one', {id: context.params.id}).then(res => {
      console.log(res, 'dddddddddddddddddd')
      return res.data.data
    })
    return {
      detail
    }
  },
}
</script>