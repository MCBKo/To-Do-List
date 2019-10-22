var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
}

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); // this makes puts the text in the input field into the "li"
	ul.appendChild(li); // this adds the "li" to an "ul"
	input.value = ""; // Resets the text input field

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);

	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("X"));
	li.appendChild(delBtn);
	delBtn.addEventListener("click", deleteListItem);

	function deleteListItem() {
		li.classList.add("delete");
	}
}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) {
		createListElement()
	}
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);