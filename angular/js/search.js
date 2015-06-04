(function(){
	var app = angular.module('myapp', [ ]);

	app.controller('SearchCtrl', function($scope){
		$scope.products = listItems;
	});

	var listItems = [
	{
		name: 'Nokia',
		price: 3.95,
		description: '....',
	},
	{
		name: 'Samsung',
		price: 4.95,

	},
	{
		name: 'Sony',
		price: 5.95,
	},
	{
		name: 'Asus',
		price: 5.95,
	},
	{
		name: 'Toyota',
		price: 5.95,
	},
	{
		name: 'Mitsubushi',
		price: 5.95,
	},
	{
		name: 'Suzuki',
		price: 5.95,
	},
	{
		name: 'Daihatsu',
		price: 5.95,
	},
	];

})();


