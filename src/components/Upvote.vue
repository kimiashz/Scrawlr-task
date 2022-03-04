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
	$size: 50px;

	.upvote {
		--background: #F4F6F8;
		--color: #343A40;

		width: $size;
		height: $size;
		border-radius: var(--radius);
		padding: var(--space);
		background: var(--background);
		color: var(--color);
		cursor: pointer;
		transition: all ease 0.2s;

		&:hover {
			filter: drop-shadow(3px 3px 5px var(--background));
		}

		&--selected {
			--background: #E5E8FD;
			--color: #253CF2;
		}
	}
</style>