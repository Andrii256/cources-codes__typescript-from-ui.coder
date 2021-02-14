interface Nutrient {
	name: string;
	value: number;
}
interface EdibleThing {
	name: string;
	color: string;
	calories: number;
	nutrients: Nutrient[];
}
interface Fruit extends EdibleThing {
	sweetness: number;
}
interface Vegetable {
	name: string;
	color: string;
	calories: number;
	nutrients: Nutrient[];
}

let apple: Fruit;

let fruitBasket: Fruit[] = [];

const tomato = {
	name: 'Tomato',
	color: 'red',
	calories: 10,
	nutrients: [],
	sweetness: 20
}

fruitBasket.push(tomato);