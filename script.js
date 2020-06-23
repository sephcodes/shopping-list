

var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");
var h1 = document.querySelector("h1");


//add delete buttons to existing list items
for (var i = 0; i < items.length; i++) {
	deleteButton(items[i]);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li"); //create element and specify tag
	li.appendChild(document.createTextNode(input.value)); //attach text to element //retrieve value property of input
	ul.appendChild(li); //to attach to unordered list
	input.value = ""; //reset value to empty string
	deleteButton(li);
}

//removes parent through button click
function removeParent(event) {
	event.target.parentElement.remove();
}

//used to add delete buttons to existing list and new items
function deleteButton(li) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikethrough(event) {
	return target = event.target.classList.toggle("done");
}

function coolTitle() {
	return target = event.target.classList.toggle("coolTitle");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

ul.addEventListener("click", strikethrough);

h1.addEventListener("click", coolTitle);

