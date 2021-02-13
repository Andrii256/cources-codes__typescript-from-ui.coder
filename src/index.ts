async function getFruitlist() {
	const response = await fetch("https://example.com/fruitList");
	const fruitList:string[] = await response.json();
	return fruitList;
} // we need this function to let our typescript compiler know which type of data we waits from api
