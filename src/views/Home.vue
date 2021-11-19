<template>
	<div id="Home" class="fixed-sn black-skin">

		<Banner></Banner>

		<div class="row my-3">

			<div class="col-sm-12 p-0 my-3">

				<h1>Home</h1>

			</div>
		
		</div>

	</div>
</template>

<script>
import Banner from '@/components/Banner.vue';

export default {
	name: 'Home',
	components: {
		Banner,
	}
}
</script>

<style scoped>
	.row {
		--mdb-gutter-x: 0px !important;
	}
</style>