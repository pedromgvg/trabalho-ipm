document.getElementById("defaultOpen").click();

var order = []
var globalPrice = 0.0
var overflowVisible = false

var pizzaQuatroQueijos = {
  name: 'Quatro Queijos',
  price: 9,
  ingredients: ['Queijo Mozzarela', 'Queijo Azul', 'Queijo de Cabra', 'Queijo Parmesão'],
  customized: [true, true, true, true]
}
var pizzaQuatroEstacoes = {
  name: 'Quatro Estacoes',
  price: 9,
  ingredients: ['Alcachofras', 'Tomate', 'Cogumelos', 'Presunto'],
  customized: [true, true, true, true]
}
var pizzaFrango = {
  name: 'Pizza Frango',
  price: 9,
  ingredients: ['Queijo Mozzarela', 'Frango'],
  customized: [true, true]
}
var pizzaPresunto = {
  name: 'Pizza Presunto',
  price: 9,
  ingredients: ['Queijo Mozzarela', 'Presunto'],
  customized: [true, true]
}
var pizzaCarbonara = {
  name: 'Pizza Carbonara',
  price: 9,
  ingredients: ['Queijo Mozzarela', 'Bacon', 'Molho Carbonara', 'Oregãos'],
  customized: [true, true, true, true]
}
var agua = {
  name: 'Água',
  price: 1.5,
  ingredients: ['Água', 'Gelo'],
  customized: [true, true]
}
var sevenup = {
  name: '7-Up',
  price: 1.5,
  ingredients: ['Sevenup', 'Gelo'],
  customized: [true, true]
}
var cocacola = {
  name: 'Coca-Cola',
  price: 1.5,
  ingredients: ['Coca-Cola', 'Gelo'],
  customized: [true, true]
}
var fanta = {
  name: 'Fanta',
  price: 1.5,
  ingredients: ['Fanta', 'Gelo'],
  customized: [true, true]
}
var pepsi = {
  name: 'Pepsi',
  price: 1.5,
  ingredients: ['Pepsi', 'Gelo'],
  customized: [true, true]
}
var brigadeiro = {
  name: 'Brigadeiro',
  price: 2,
  ingredients: ['Brigadeiro'],
  customized: [true]
}
var geladoMorango = {
  name: 'Gelado de Morango',
  price: 2,
  ingredients: ['Gelado de Morango'],
  customized: [true]
}
var mousseChocolate = {
  name: 'Mousse de Chocolate',
  price: 2,
  ingredients: ['Mousse de Chocolate'],
  customized: [true]
}
var saladaFruta = {
  name: 'Salada de Fruta',
  price: 2,
  ingredients: ['Salada de Fruta'],
  customized: [true]
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
  $(".removable").remove()
}

function openCustomization (reference) {
  $(".customization-menu").append('<h2 class="removable">Estás a customizar o elemento ' + order[reference].name + '</h2>')
  $(".customization-menu").append('<h3 class="removable">Ingredientes:</h3>')
  $(".customization-menu").append('<div class="ingredients-list removable"></div>')
  var id= 0
  order[reference].ingredients.forEach(function(ingredient) {
    $(".ingredients-list").append('<label><input type="checkbox" id="' + 'c' + id + '" ' + (order[reference].customized[id] ? 'checked' : '') + '>' + ingredient + '</label></br>')
    id += 1
  })
  $(".customization-menu").append('<button class="removable" onClick="saveChanges(' + reference + ')">Gravar alterações</button>')
  $(".customization-menu").css("display", "block")
}

$('[type="checkbox"]').on('click', function() {
    console.log("The element with id " + this.id + " changed.");
});

function saveChanges (reference) {
  //Queremos gravar alterações ao pedido em order[reference]
  var newPedido = $.extend(true, {}, order[reference]);
  var ingredientesFora = []
  var ingredientesIn = []
  var numb = 0

  order[reference].ingredients.forEach(function (atual) {
    if (!($('#c' + numb).is(':checked'))) {
      ingredientesFora.push(atual)
      newPedido.customized[numb] = false
    } else {
      ingredientesIn.push(atual)
      newPedido.customized[numb] = true
    }
    numb += 1
  })
  order[reference] = newPedido
  $('#' + reference +" .removable-again").remove()
  ingredientesFora.forEach(function (atual) {
    $('#' + reference).append('<p class="removable-again">Sem ' + atual + '</p>')
  })
  closeCustomization()
}
