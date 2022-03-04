<template>
  <h1>task</h1>
  <Upvote :selected="true" />
</template>

<script>
import Upvote from './components/Upvote.vue'

export default {
  name: 'App',
  components: {
    Upvote,
  },
}
</script>

<style lang="scss">
	:root {
    font-size: 16px;
    --space: 0.8rem;
    --radius: 5px;
  }

  * {
    box-sizing: border-box;
  }
</style>
