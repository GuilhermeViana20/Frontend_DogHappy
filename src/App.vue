<template>
	<Header></Header>
	<router-view></router-view>
	<Footer></Footer>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer.vue';

export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
}
</script>

<style>
</style>
