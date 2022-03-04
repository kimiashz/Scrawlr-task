<template>
  <div v-bind:class="{ 'upvote': true , 'upvote--selected': selected }">
		up
  </div>
</template>

<script>
export default {
  name: 'Upvote',
  props: {
    selected: Boolean,
  }
}
</script>