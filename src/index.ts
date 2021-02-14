interface Fruit {
	name: string;
	color: string;
	[huy: string]: string;
	[chislo: number]: string;
	[smth: boolean]: string;
}

const apple: Fruit = {
	name: 'Apple',
	color: 'red'
}

apple.nutrient1 = '50mg';
apple.nut2 = '20mg';
apple[325] = 'fuck';
apple[true] = 'yes';

console.log(apple);