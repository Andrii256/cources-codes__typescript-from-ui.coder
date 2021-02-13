function getFruitbasketVerbalCount(fruitList: any) {
	let verbalFruitCount;
	if (fruitList.length > 5) {
		verbalFruitCount = "A lot of fruit.";
	} else {
		verbalFruitCount = "Some fruit.";
	}
	return verbalFruitCount;
}

let boolma!:string;

console.log(boolma);

let menu: {
	courses: number;
	veganOption: boolean;
	drinkChoices: string[];
} = {
	courses: 5,
	veganOption: true,
	drinkChoices: ["Sprite", "Coke", "Water"]
}

const {courses:string} = menu;

async function getFruitlist() {
	const response = await fetch("https://example.com/fruitList");
	const fruitList = await response.json();
	const typeFruuitlist = fruitList;
	return typeFruuitlist;
} // we need this function to let our typescript compiler know which type of data we waits from api
