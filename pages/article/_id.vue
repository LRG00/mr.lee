<template>
  <div>
    xxxxxxxxxx
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$router.history.current.params.id)
  }
}
</script>