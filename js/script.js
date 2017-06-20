console.log('hello world')

var car = {
	make: 'VW',
	type: 'Polo',
	color: 'Blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4'
	],
	turnOn: function () {
		this.isTurnedOn = true;
	}
};