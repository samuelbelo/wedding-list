<template lang="pug">
v-app
	v-app-bar(
		app
		color="primary"
		dark)
	v-main.overall
		router-view(:key="$route.path")
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
	}),
};
</script>
<style lang="scss">
.overall {
	background-color: #f7f5f5;
}
</style>
