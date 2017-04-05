var orderPrice = 0;
var burritoIndex = 0;

function init() {

  var addButton = document.getElementById("addBurrito");
  addButton.onclick = displayReceipt;  

}

// this function displays the full order
displayReceipt = function() {

  // call an entry display for the current burrito
  displayReceiptEntry();
  // update the total and display it
  updateTotal();
  
}

function updateTotal() {
  // declare, and reference to the receipt div
  var receipt = document.getElementById("receipt")
  var receiptTotalDiv;
  var receiptTotalLine;
  
  // remove the total div if it currently exists
  if (document.getElementById("total")) {
    receiptTotalDiv = document.getElementById("total")
    receiptTotalDiv.parentNode.removeChild(receiptTotalDiv);
  }
  
  // create the total div, add the price line to it, add it to the receipt div
  receiptTotalDiv = document.createElement("div")
  receiptTotalDiv.id = "total";
  receiptTotalLine = document.createTextNode("Order Total: $" + orderPrice.toFixed(2));
  receiptTotalDiv.appendChild(receiptTotalLine);
  receipt.appendChild(receiptTotalDiv);
}

// this function adds the complete receipt entry to the display
displayReceiptEntry = function() {
  var receipt = document.getElementById("receipt");
  receipt.appendChild(createReceiptEntry(getBurrito()));
}

// this function creates an individual receipt entry and returns a div containing it
createReceiptEntry = function(burrito) {

  // iterate burrito index
  burritoIndex++;

  // declare
  var line = [];
  var totalLine;
  var entryDiv;
  var newDiv;  
  var removeButton;  
  
  // create receipt lines in separate text nodes
  line.push(document.createTextNode("Burrito: " + burrito.getType().toUpperCase()));
  line.push(document.createTextNode("Rice: " + burrito.getRice().toUpperCase()));
  line.push(document.createTextNode("Beans: " + burrito.getBean().toUpperCase()));
  line.push(document.createTextNode("Salsa(s): " + burrito.getSalsa().toUpperCase()));
  line.push(document.createTextNode("Guac: " + burrito.getGuac()));
  
  // create entry div
  entryDiv = document.createElement("div");
  entryDiv.className = "burritoEntry";
  entryDiv.id = "entry" + burritoIndex;
  
  // loop through the receipt lines, adding them to a new div and placing it in the entry div
  for (var i = 0, length = line.length; i < length; i++) {
    newDiv = document.createElement("div")
    newDiv.appendChild(line[i]);
    entryDiv.appendChild(newDiv);
  }
  
  // keep track of total order price
  orderPrice += parseFloat(burrito.getTotalPrice());
  
  // create burrito price line and place it in the entry div
  newDiv = document.createElement("div")
  totalLine = document.createTextNode("Burrito Price: $" + burrito.getTotalPrice());
  newDiv.appendChild(totalLine);
  entryDiv.appendChild(newDiv);
  
  // create remove button and place it into entry div
  removeButton = document.createElement("input");
  removeButton.type = "button";
  removeButton.className = "removeBurrito";
  removeButton.value = "Remove This Burrito";
  removeButton.id = "remove" + burritoIndex;
  removeButton.onclick = function() { removeBurrito(entryDiv.id, parseFloat(burrito.getTotalPrice()));};
  entryDiv.appendChild(removeButton); 
  entryDiv.appendChild(document.createElement("hr"));
  
  return entryDiv;
    
}

function removeBurrito(id, price) {
  console.log("removing: " + id);
  var entryToRemove = document.getElementById(id);
  entryToRemove.parentNode.removeChild(entryToRemove);
  orderPrice = orderPrice - price;
  updateTotal();
}

// this function creates a burrito using the form values and returns it
function getBurrito() {
  
  var burrito = new Burrito();
  
  // set burrito type
	burrito.setType(document.getElementById("type").value);
  
  // set rice
  var rice       = document.getElementsByName("rice");
    for (var i = 0, length = rice.length; i < length; i++) {
      if(rice[i].checked) {
        rice = rice[i].value;
      }
    }
  burrito.setRice(rice);
  
  // set beans
  var bean     = document.getElementsByName("bean");
    for (var i = 0, length = bean.length; i < length; i++) {
      if(bean[i].checked) {
        bean = bean[i].value;
      }
    }
  burrito.setBean(bean);
  
  // set salsa
  var salsaChoices = "";
  var salsa = document.getElementsByName("salsa");
	for (var i = 0, length = salsa.length; i < length; i++) {
		if(salsa[i].checked) {
			if(salsaChoices.length === 0) {
				salsaChoices += salsa[i].value;
			} else {
				salsaChoices += ", " + salsa[i].value;
			}
		}
	}
  burrito.setSalsa(salsaChoices);
  
  // set guac
  burrito.setGuac(document.getElementById("guac").checked);
  
  return burrito;
  
}


// burrito "class"
function Burrito() {

	// private instance variable
	var type  = '';
	var rice  = '';
  var bean  = '';
  var salsa = '';
  var guac  = false;
	
	// public accessor method
	this.getType = function() {
		return type;
	}
	this.setType = function(value) {
		type = value;
	}
	
	this.getRice = function() {
		return rice;
	}
	this.setRice = function(value) {
		rice = value;
	}
  
  this.getBean = function() {
		return bean;
	}
	this.setBean = function(value) {
		bean = value;
	}
  
  this.getSalsa = function() {
		return salsa;
	}
	this.setSalsa = function(value) {
		salsa = value;
	}
  
  this.getGuac = function() {
		return guac;
	}
	this.setGuac = function(value) {
		guac = value;
	}
	
	// method to return burrito price based on type
	Burrito.prototype.getBurritoPrice = function() {
  
    var burritoPrice = 0;
    
    if (type === "chicken") {
      burritoPrice = 6.20;
    }
    if (type === "steak") {
      burritoPrice = 6.75;
    }
    if (type === "carnitas") {
      burritoPrice = 6.60;
    }
    if (type === "barbacoa") {
      burritoPrice = 6.60;
    }
    if (type === "vegetarian") {
      burritoPrice = 6.20;
    }
    
    return burritoPrice;
    
	}
  
  // method to return total burrito price with or without additional guac charge
  Burrito.prototype.getTotalPrice = function() {
  
    var totalPrice = this.getBurritoPrice();
    
    if (guac) {
      totalPrice += 1.40;
    }
    
    return parseFloat(totalPrice).toFixed(2);
    
  }

}