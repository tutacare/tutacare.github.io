(function(){
	var app = angular.module('store-products', [ ]);

	var myproducts = [
	{
		name: 'Bacan',
		price: 2.95,
		description: '....',
		images: [
			{
				full: 'images/image-full.png',
				thumb: 'images/image-thumb.png',
			},
		],
	},
	{
		name: 'zamrud',
		price: 2.95,
		description: '....',
		images: [
			{
				full: 'images/image-full.png',
				thumb: 'images/image-thumb.png',
			},
		],
	},
	];

	app.directive('productItem', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-item.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.products = myproducts;
			},
			controllerAs: 'store'
		};
	});

})();


