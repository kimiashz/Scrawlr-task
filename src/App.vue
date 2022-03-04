<template>
  <h1>task</h1>
  <List />
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List,
  },
}
</script>

<style lang="scss">
	:root {
    font-size: 16px;
    --space: 0.8rem;
    --radius: 5px;
    --size: 50px;
  }

  * {
    box-sizing: border-box;
  }
</style>
