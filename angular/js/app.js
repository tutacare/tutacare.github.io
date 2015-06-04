(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
	{
		name: 'Bacan',
		price: 2.95,
		description: '....',
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'Bacan',
		price: 2.95,
		description: '....',
		canPurchase: true,
		soldOut: false,
	},
	];

})();


