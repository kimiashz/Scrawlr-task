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
  }
}
</script>
