<template>
  <h1>Scrawlr Task</h1>
  <List
    v-for="({ count, selected }, index) in items"
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
  data() {
    return {
      items: [
        { count: 1, selected: true },
        { count: 1, selected: false },
        { count: 1, selected: false },
      ]
    }
  },
  methods: {
    createToggle (key, selected) {
      return () => this.items[key].selected = !selected;
    },
    createAdd (key) {
      return () => ++this.items[key].count;
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
</style>
