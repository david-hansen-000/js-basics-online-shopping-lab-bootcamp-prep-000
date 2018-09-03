var cart = [];

function getCart() {
 return cart;
}

function log(description, message) {
  console.log(description+":"+message);
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var myobj={};
  var itemName="itemName";
  var itemPrice=0;
  myobj[itemName]=item;
  myobj[itemPrice]=Math.floor(Math.random()*100);
log("obj",myobj);
  log("itemName",myobj.itemName);
  log("itemPrice",myobj.itemPrice);
  cart.push(myobj);
  return myobj[itemName] + " has been added to your cart."; 
}

function viewCart() {
 var result="In your cart, you have ";
 if (cart.lenth>0) {
  for (var i=0; i<array.length; i++) {
    result=result+cart[i].itemName+" at $"+car[i].itemPrice;
    if (array.length>1) {
      if (i<array.length-1) {
        result=result+", ";
      } else if (i===array.length-1) {
        result=result+", and ";
      }
    }
    result=result+".";
  }
 } else {
   result="Your shopping cart is empty.";
 }
 return result;
}

function total() {
  var result=0;
  for (var i=0; i<cart.length; i++) {
    result+=cart[i].itemPrice;
  }
  return result;
}

function removeFromCart(item) {
    var result=false;
    var num=0;
    for (var i=0; i<cart.length; i++) {
      if (item === cart[i].itemName) {
        result=true;
        num=i;
      }
      if (result) {
        delete car[num].item;
        return cart;
      } else {
        return "That item is not in your cart.";
      }
    }
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined || cardNumber === null || cardNumber === 0) {
      return "Sorry, we don't have a credit card on file for you.";
    } else {
      var t=total();
      for (var i=0; i<cart.length; i++) {
        cart.pop();
      }
      return "Your total cost is $"+t+", which will be charged to the card "+cardNumber+".";
    }
}

addToCart("pumpkin");
