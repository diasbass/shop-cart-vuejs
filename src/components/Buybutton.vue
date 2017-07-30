<template>
	<button @click="launchAction()" class="btn buy-btn clear" :type="tipo">{{ rotulo }}</button>
</template>

<script>
	export default {
		props: ['tipo','rotulo'],

		methods: {
			launchAction() {
				//if(confirm('Deseja Adicionar esse produto ao carrinho?')) {
					this.$emit('btn-activated');
				//}				
			}
		}
	}
</script>