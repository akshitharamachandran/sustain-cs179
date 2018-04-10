// TODO

console.log("hi")

var fridge = {
		Apples : ["12", "4/4"],
		Eggs : ["14", "4/5"],
		Milk : ["1", "4/10"],
		Chicken : ["2", "4/6"],
		Bananas  : ["5", "4/1"]
	}


function generateFridge(){
	if (localStorage.fridge) {
		fridge = JSON.parse(localStorage.fridge)
	}
	var table = "<table align='center'><tr><td>Item</td><td>Quantity</td><td>Expiration</td></tr>"
	for (var item in fridge){
		table += "<tr><td>"+ item +"</td><td>"+ fridge[item][0] + "</td>" +
					"<td>"+ fridge[item][1] +"</td></tr>"
	}
	table += "</table>"
	document.getElementById("fridgeContent").innerHTML = table
}

function generateEditableTable(){
	document.getElementById("editTableButton").style.display = "none"
	document.getElementById("saveButton").style.display = "inline-block"

	document.getElementById("addContent").style.display = "block" 

	var table = "<p>Click on any field to edit it</p><table align='center'><tr><td>Item</td><td>Quantity</td><td>Expiration</td></tr>"
	for (var item in fridge){
		table += "<tr><td contenteditable='true' class='item'>"+ item +"</td><td contenteditable='true' class='quantity'>"+ fridge[item][0] +"</td><td contenteditable='true' class='expiration'>"+ fridge[item][1] +"</td></tr>"
	}
	table += "</table>"
	document.getElementById("fridgeContent").innerHTML = table
}

function saveEditedFridge(){
	var items =  Array.from(document.getElementsByClassName('item'));
	
	var quantities =  Array.from(document.getElementsByClassName('quantity'));
	
	var expirations =  Array.from(document.getElementsByClassName('expiration'));
	
	var newFridge = {}
	for (var i = 0; i < items.length; i++){
		newFridge[items[i].innerHTML] = [quantities[i].innerHTML, expirations[i].innerHTML]
	}
	if (document.getElementById('inputItem').value){
		newFridge[document.getElementById('inputItem').value] = [document.getElementById('inputQuantity').value, document.getElementById('inputExpiration').value]
	}	

	localStorage.fridge = JSON.stringify(newFridge)
	generateFridge()
	document.getElementById("editTableButton").style.display = "inline-block"
	document.getElementById("saveButton").style.display = "none"
	document.getElementById('addContent').style.display = "none"
}

function generateListOfFoods(elementId){
	var foodListHTML = ""
	if (localStorage.fridge) {
		fridge = JSON.parse(localStorage.fridge)
	}
	for (var food in fridge){
		foodListHTML += "<input type='checkbox'>" + food + "</input><br>"
	}
	document.getElementById(elementId).innerHTML = foodListHTML
}









