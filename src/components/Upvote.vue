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

<style lang="scss">
	.upvote {
		background: #F4F6F8;
		color: #343A40;

		&--selected {
			background: #E5E8FD;
			color: #253CF2;
		}
	}
</style>