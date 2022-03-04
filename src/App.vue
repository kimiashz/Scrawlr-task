<template>
  <h1>Scrawlr Task</h1>
  <List
    v-for="({ count, selected }, index) in $store.state.items"
    :key="index"
    :count="count"
    :selected="selected"
    :toggle="createToggle(index, selected)"
    :add="createAdd(index)"
  />
  <h6>2022 By Kimia.</h6>
</template>

<script>
import List from './components/List.vue';

export default {
  name: 'App',
  components: {
    List,
  },
  methods: {
    createToggle (key) {
      return () => this.$store.dispatch('toggle', key);
    },
    createAdd (key) {
      return () => this.$store.dispatch('add', key);
    }
  }
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

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: var(--space);
  }
</style>
