document.getElementById("defaultOpen").click();

var order = []
var globalPrice = 0.0
var overflowVisible = false

var pizzaQuatroEstacoes = {
  name: 'Quatro Queijos',
  price: 9,
  ingredients: ['Queijo Mozzarela', 'Queijo Azul', 'Queijo de Cabra', 'Queijo Parmesão']
}
var pizzaQuatroQueijos = {
  name: 'Quatro Estacoes',
  price: 9,
  ingredients: ['Alcachofras', 'Tomate', 'Cogumelos', 'Presunto']
}
var pizzaFrango = {
  name: 'Pizza Frango',
  price: 9,
  ingredients: ['Queijo Mozzarela', 'Frango']
}
var pizzaPresunto = {
  name: 'Pizza Presunto',
  price: 9,
  ingredients: ['Queijo Mozzarela', 'Presunto']
}
var pizzaCarbonara = {
  name: 'Pizza Presunto',
  price: 9,
  ingredients: ['Queijo Mozzarela', 'Bacon', 'Molho Carbonara', 'Oregãos']
}
var agua = {
  name: 'Água',
  price: 1.5,
  ingredients: ['Água', 'Gelo']
}
var sevenup = {
  name: '7-Up',
  price: 1.5,
  ingredients: ['Sevenup', 'Gelo']
}
var cocacola = {
  name: 'Coca-Cola',
  price: 1.5,
  ingredients: ['Coca-Cola', 'Gelo']
}
var fanta = {
  name: 'Fanta',
  price: 1.5,
  ingredients: ['Fanta', 'Gelo']
}
var pepsi = {
  name: 'Pepsi',
  price: 1.5,
  ingredients: ['Pepsi', 'Gelo']
}
var brigadeiro = {
  name: 'Brigadeiro',
  price: 2,
  ingredients: ['Brigadeiro']
}
var geladoMorango = {
  name: 'Gelado de Morango',
  price: 2,
  ingredients: ['Gelado de Morango']
}
var mousseChocolate = {
  name: 'Mousse de Chocolate',
  price: 2,
  ingredients: ['Mousse de Chocolate']
}
var saladaFruta = {
  name: 'Salada de Fruta',
  price: 2,
  ingredients: ['Salada de Fruta']
}

function addToCart (itemName) {
  switch (itemName) {
    case 'quatro-estacoes':
      order.push(pizzaQuatroEstacoes);
      globalPrice += pizzaQuatroEstacoes.price
      auxAdd(pizzaQuatroEstacoes.name, pizzaQuatroEstacoes.price)
      break;
    case 'quatro-queijos':
      order.push(pizzaQuatroQueijos);
      globalPrice += pizzaQuatroQueijos.price
      auxAdd(pizzaQuatroQueijos.name, pizzaQuatroQueijos.price)
      break;
    case 'frango':
      order.push(pizzaFrango);
      globalPrice += pizzaFrango.price
      auxAdd(pizzaFrango.name, pizzaFrango.price)
      break;
    case 'presunto':
      order.push(pizzaPresunto);
      globalPrice += pizzaPresunto.price
      auxAdd(pizzaPresunto.name, pizzaPresunto.price)
      break;
    case 'carbonara':
      order.push(pizzaCarbonara);
      globalPrice += pizzaCarbonara.price
      auxAdd(pizzaCarbonara.name, pizzaCarbonara.price)
      break;
    case 'agua':
      order.push(agua);
      globalPrice += agua.price
      auxAdd(agua.name, agua.price)
      break;
    case 'sevenup':
      order.push(sevenup);
      globalPrice += sevenup.price
      auxAdd(sevenup.name, sevenup.price)
      break;
    case 'coca-cola':
      order.push(cocacola);
      globalPrice += cocacola.price
      auxAdd(cocacola.name, cocacola.price)
      break;
    case 'fanta':
      order.push(fanta);
      globalPrice += fanta.price
      auxAdd(fanta.name, fanta.price)
      break;
    case 'pepsi':
      order.push(pepsi);
      globalPrice += pepsi.price
      auxAdd(pepsi.name, pepsi.price)
      break;
    case 'brigadeiro':
      order.push(brigadeiro);
      globalPrice += brigadeiro.price
      auxAdd(brigadeiro.name, brigadeiro.price)
      break;
    case 'gelado-morango':
      order.push(geladoMorango);
      globalPrice += geladoMorango.price
      auxAdd(geladoMorango.name, geladoMorango.price)
      break;
    case 'mousse-chocolate':
      order.push(mousseChocolate);
      globalPrice += mousseChocolate.price
      auxAdd(mousseChocolate.name, mousseChocolate.price)
      break;
    case 'salada-fruta':
      order.push(saladaFruta);
      globalPrice += saladaFruta.price
      auxAdd(saladaFruta.name, saladaFruta.price)
      break;
  }
}

function auxAdd (name, price) {
  $(".cart").prepend('<div id="' + (order.length - 1) +
  '" class="cart-item"><p>' + name + ' - ' + price + '€</p><button onClick="removeOrder('+
  (order.length - 1) +')" id="' + 'b' + (order.length - 1) +
  '">Remover</button><button onClick="openCustomization('+ (order.length - 1) + ')">Customiza</button></div>');
  $(".total").text("Total a pagar: " + globalPrice)
}

function removeOrder (id) {
  var price = parseFloat($("#" + id).text().split(" - ")[1].split("€")[0])
  globalPrice -= price
  $("#" + id).remove()
  $(".total").text("Total a pagar: " + globalPrice)
}

function callWaiter () {
  alert('Empregado a caminho')
}

function displayMenu () {
  console.log('specific listen')
  setTimeout(function() {
    $(".overflow-menu").css("display", "block")
  }, 100)
}

$(document).click(function() {
  console.log('universal listen')
  if ($(".overflow-menu").css("display") == "block") {
    $(".overflow-menu").css("display", "none")
  }
});

function buttonOverflowClicked () {
  alert('One of the overflow options was clicked')
}

function openTab(evt, tabName) {
    $(".tabcontent").css("display", "none")
    $(".tablinks").removeClass('active');
    $("#" + tabName).css("display", "block")
    evt.currentTarget.className += " active";
}

function closeCustomization () {
  $(".customization-menu").css("display", "none")
  $(".ingredients-list").empty()
}

function openCustomization (reference) {
  $(".customization-menu").css("display", "block")
  order[reference].ingredients.forEach(function(ingredient) {
    $(".ingredients-list").append('<label><input type="checkbox" id="' + ingredient + '">' + ingredient + '</label></br>')
  })
}
