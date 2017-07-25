var groceryList = [];

function item(itemId, price) {
  this.itemId = itemId;
  this.price = price;
};

var totPrint;

var container = document.createElement('div');
container.className = 'container';
container.style.width = '500px';
container.style.minHeight = '300px';
container.style.backgroundColor = 'white';
container.style.margin = '50px auto';
container.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, .5)';
container.style.borderRadius = '5px';
container.style.padding = '20px';
document.body.appendChild(container);

var header = document.createElement('p');
header.className = 'gHeader';
header.innerText = 'Grocery List';
header.style.fontSize = '36px';
header.style.fontFamily = "'Open Sans', sans-serif";
header.style.margin = "0";
container.appendChild(header);

var p = document.createElement('p');
p.className = 'pCenter';
p.innerText = 'Here are your groceries for today!';
p.style.textAlign = 'center';
p.style.fontFamily = "'Open Sans', sans-serif";
container.appendChild(p);

var list = document.createElement('ul');
list.className = "gList";
container.appendChild(list);

var form = document.createElement('form');
form.className = "form";
form.style.textAlign = "center";
container.appendChild(form);

var itemInput = document.createElement('input');
itemInput.id = 'ai';
itemInput.className = "newItem";
itemInput.placeholder = "Add your grocery"
itemInput.style.width = '490px';
itemInput.style.margin = '20px 0 0 0';
itemInput.style.padding = '10px 0 10px 10px';
itemInput.style.borderRadius = '5px';
itemInput.style.border = '1px solid #ccc';
itemInput.style.fontFamily = "'Open Sans', sans-serif";
itemInput.style.fontSize = "18px";
form.appendChild(itemInput);

var priceInput = document.createElement('input');
priceInput.id = 'ap';
priceInput.className = "newPrice";
priceInput.placeholder = "Add your price";
priceInput.type = 'number';
priceInput.style.width = '490px';
priceInput.style.margin = '20px 0 0 0';
priceInput.style.padding = '10px 0 10px 10px';
priceInput.style.borderRadius = '5px';
priceInput.style.border = '1px solid #ccc';
priceInput.style.fontFamily = "'Open Sans', sans-serif";
priceInput.style.fontSize = "18px";
form.appendChild(priceInput);

var btn = document.createElement('div');
btn.innerHTML = "<button onclick='addItem()'' class='floatR' type='button' name='button'>Add</button>";
btn.style.width = '100%';
btn.style.margin = '20px 0 0 0';
form.appendChild(btn);

var tPrint = document.createElement('p');
tPrint.className = 'totalPrint';
tPrint.style.fontFamily = "'Open Sans', sans-serif";
form.appendChild(tPrint);

//onclick()
function addItem() {

  var varItem = document.getElementById('ai').value;
  var varPrice = parseFloat(document.getElementById('ap').value);
  console.log(typeof varPrice)

  var li = document.createElement('li');
  li.innerText = varItem + ' costs $' + varPrice.toFixed(2) + '.';
  li.style.fontFamily = "'Open Sans', sans-serif";
  list.appendChild(li);
  var np = varPrice;
  var addArray = new item(varItem, np);
  groceryList.push(addArray);

  totPrint = 0;
  for (var i = 0; i < groceryList.length; i++) {
    var l = groceryList[i];
    totPrint += l.price;

  }
  console.log(totPrint);
  tPrint.innerText = 'Your total is: $' + totPrint.toFixed(2);

};



console.log(groceryList);




// //Object constructor for groceryList array
// function item(itemNum, name, pricePer, qty, tax, totalPrice) {
//   this.itemNum = itemNum;
//   this.name = name;
//   this.pricePer = pricePer;
//   this.qty = qty;
//   tax = (pricePer * qty * 0.06);
//   this.tax = tax;
//   this.totalPrice = ((pricePer * qty) + tax);
// };
//Shopping Cart array
// var groceryList = [];
// // footer row with values pulled from forLoop()
// function totalList(ft1,ft2,ft3,ft4,ft5) {
//
//   document.getElementById('tot#').innerText = ft1;
//   document.getElementById('totPrice').innerText = '$'+ft2;
//   document.getElementById('preTaxTot').innerText = '$'+ft3;
//   document.getElementById('taxTot').innerText = '$'+ft4;
//   document.getElementById('gTot').innerText = '$'+ft5;
// }
//
// //forLoop function that adds up totals for footer
// function forLoop() {
//   var totItems = 0;
//   var totPrice = 0;
//   var preTaxTot = 0;
//   var taxTot = 0;
//   var gTot = 0;
//
//   for (var i = 0; i < groceryList.length; i++) {
//     var obj = groceryList[i];
//     totItems += (1);
//     totPrice += obj.pricePer;
//     preTaxTot += (obj.pricePer*obj.qty);
//     taxTot += obj.tax;
//     gTot += obj.totalPrice;
//   }
//   totalList(totItems,totPrice.toFixed(2),preTaxTot.toFixed(2),taxTot.toFixed(2),gTot.toFixed(2));
//
// }
//
// // addItem function onclick
// function clickAdd(){
// var enterI = document.getElementById('enterItem').value;
// var enterQ = parseFloat(document.getElementById('enterQty').value);
// var enterP = parseFloat(document.getElementById('enterPrice').value);
//
// // function that pulls inputs --> runs with onclick='clickAdd()' also pushes
// // also this function pushes new item to groceryList array
// function addItem(itemCount, newItem, newPrice, newQty){
//   var addedItem = 'item' + ((groceryList.length + 1).toString());
//   addedItem = new item(itemCount, newItem, newPrice, newQty);
//   groceryList.push(addedItem);
//
// //Table rows added per add item click
//   var new_row = document.createElement('tr');
//   new_row.insertCell(0).innerText = "";
//   new_row.insertCell(1).innerText = "";
//   new_row.insertCell(2).innerText = newItem;
//   new_row.insertCell(3).innerText = '$' + newPrice.toFixed(2);
//   new_row.insertCell(4).innerText = newQty.toFixed(2);
//   new_row.insertCell(5).innerText = '$' + (newQty*newPrice).toFixed(2);
//   new_row.insertCell(6).innerText = '$' + (newQty*newPrice*.06).toFixed(2);
//   new_row.insertCell(7).innerText = '$' + ((newQty*newPrice*.06)+(newQty*newPrice)).toFixed(2);
//   new_row.insertCell(8).innerHTML = "<button onclick='deleteRow(this)' class='deleteBtn' type='button' name='button'>Delete Item</button>";
//   insertAfter(document.getElementById("insert"), new_row);
//   function insertAfter(target, el) {
//       target.parentNode.appendChild( el );
//   }
// }
//
// addItem((groceryList.length + 1), enterI, enterP, enterQ);
// window['forLoop']();
// };
//
// function deleteRow(row){
//   var d = row.parentNode.parentNode.rowIndex;
//   document.getElementById('groceryTable').deleteRow(d);
//   groceryList.splice((d-1),1);
//   window['forLoop']();
// };
