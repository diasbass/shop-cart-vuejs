<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-6 col-md-4 box-product" v-for="product of products">
				<div class="box-product--item">
					<h2 class="box-product--item_title">{{ product.productName }}</h2>
					<div class="col-xs-6"><img class="img-responsive box-product--item_image" :src="product.productImageUrl" :alt="product.productName"></div>
					<div class="col-xs-6">
						<p class="box-product--item_description">{{ product.productDescription }}</p>
						<p class="box-product--item_price"><span>R$ {{ product.productPrice }}</span></p>
					</div>
					<div class="clear"></div>
					
					<buy-button tipo="button" rotulo="Adicionar ao carrinho" @btn-activated="addToCart(product)"></buy-button>	
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Buybutton from './Buybutton.vue';
	export default	{
		components: {
			'buy-button': Buybutton
		},
		data()	{
			return	{
				products: [
					{
						productName: 'Livro Vol. 1',
						productImageUrl: 'https://s-media-cache-ak0.pinimg.com/236x/9d/96/b6/9d96b61414f12da72c1c7bf097f5438d.jpg',
						productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, minima eligendi dignissimos quasi, natus veniam.',
						productPrice: '11,90'
					},
					{
						productName: 'Livro Vol. 2',
						productImageUrl: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_dfa324c84c4fb0762cd5a838849843004305398b.jpg',
						productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, minima eligendi dignissimos quasi, natus veniam.',
						productPrice: '12,90'
					},
					{
						productName: 'Livro Vol. 3',
						productImageUrl: 'http://i.ebayimg.com/thumbs/images/g/ovUAAOxyXDhSd8wE/s-l200.jpg',
						productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, minima eligendi dignissimos quasi, natus veniam.',
						productPrice: '13,90'
					},
					{
						productName: 'Livro Vol. 4',
						productImageUrl: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_dfa324c84c4fb0762cd5a838849843004305398b.jpg',
						productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, minima eligendi dignissimos quasi, natus veniam.',
						productPrice: '14,90'						
					},
					{
						productName: 'Livro Vol. 5',
						productImageUrl: 'http://i.ebayimg.com/thumbs/images/g/ovUAAOxyXDhSd8wE/s-l200.jpg',
						productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, minima eligendi dignissimos quasi, natus veniam.',
						productPrice: '15,90'						
					},
					{
						productName: 'Livro Vol. 6',
						productImageUrl: 'https://s-media-cache-ak0.pinimg.com/236x/9d/96/b6/9d96b61414f12da72c1c7bf097f5438d.jpg',
						productDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, minima eligendi dignissimos quasi, natus veniam.',
						productPrice: '16,90'						
					}
				]
			}
		},
		props: ['product'],
		methods: {
			addToCart(product) {				
				console.log('Enviar para o carrinho: ' + product.productName + ' - R$ ' + product.productPrice);
			}
		}
	}
</script>