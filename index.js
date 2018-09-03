var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj={
    itemName:item,
    itemPrice:Math.floor(Math.random()*100)
  };
  cart.push(obj);
  return obj[itemName] + " has been added to your cart."; 
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
   result="Your cart is empty.";
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
    
}

function placeOrder(cardNumber) {
  // write your code here
}
