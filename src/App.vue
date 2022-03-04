<template>
  <h1>Kimia</h1>
  <List
    v-for="({ count, selected }, index) in items"
    :key="index"
    :count="count"
    :selected="selected"
    :toggle="() => { items[index].selected = !selected; }"
    :add="() => { ++items[index].count; }"
  />
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
        { count: 5, selected: true },
        { count: 3, selected: true },
        { count: 8, selected: false },
      ]
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
