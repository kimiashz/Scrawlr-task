<template>
  <div class="list">
    <div class="list__items">
      <Upvote :selected="true" />
      <Upvote :selected="false" />
      <Upvote :selected="true" />
    </div>
    <div class="list__add">
      +
    </div>
  </div>
</template>

<script>
import Upvote from './Upvote.vue'

export default {
  name: 'List',
  components: {
    Upvote,
  },
}
</script>

<style lang="scss">
	.list {
    margin-bottom: var(--space);
    display: grid;
    grid-template-columns: auto calc(var(--size) + (var(--space) * 2));

    &__items {
      border: 1px solid #F4F6F8;
      border-radius: var(--radius);
      padding: var(--space);
      display: flex;
      gap: var(--space);
      flex-wrap: wrap;
    }

    &__add {
      --add-background: #F4F6F8;
      --add-color: #343A40;

      width: var(--size);
      height: var(--size);
      border-radius: var(--radius);
      padding: var(--space);
      margin: var(--space);
      background: var(--add-background);
      color: var(--add-color);
      cursor: pointer;

      &:hover {
        filter: drop-shadow(3px 3px 5px var(--add-background));
      }
    }
	}
</style>