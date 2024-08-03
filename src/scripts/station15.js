function displayList(){
	const listElement = document.createElement("ul");
	const list=["リンゴ","イチゴ","ブドウ"]
	for (let i = 0; i < list.length; i++) {
		const li = document.createElement("li");
		const elem = document.createTextNode(list[i]);
		li.appendChild(elem);
		listElement.appendChild(li);
	}

	const newFruits=document.createElement("div")
	newFruits.id="fruits"
	newFruits.appendChild(listElement)
	const oldFruits = document.getElementById("fruits");
	//const child = fruits.querySelector();
	oldFruits.replaceWith(newFruits)
  
}