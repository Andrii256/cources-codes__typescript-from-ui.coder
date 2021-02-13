let fruitName = "Banana";

let fruit = {
	name: "Banana",
	color: "Yellow",
	seetness: 90,
	isRipe: true
}

let fruitName2 = ["Apple", "Banana", "Strawberry"];

const callBack = (name: string) => {
	return name.length;
};

const nameLength = fruitName2.map(callBack);