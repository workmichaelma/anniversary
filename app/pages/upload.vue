<template>
  <div>
    <form id="form" action="/updatecover" method="get">
      <input type="text" name="url"/>
      <input type="submit" />
    </form>
  </div>
</template>


<script>
import axios from 'axios'
  export default {
    data() {
      return {
      }
    },
    mounted() {
    },
    components: {
    }
  }
</script>

<style lang="stylus" scoped>
</style>