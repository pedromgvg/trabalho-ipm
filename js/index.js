document.getElementById("defaultOpen").click();

var order = []

var pizzaQuatroEstacoes = {
  name: 'Quatro Queijos',
  price: '9',
  ingredients: ['Queijo Mozzarela', 'Queijo Azul', 'Queijo de Cabra', 'Queijo Parmesão']
}
var pizzaQuatroQueijos = {
  name: 'Quatro Estacoes',
  price: '9',
  ingredients: ['Alcachofras', 'Tomate', 'Cogumelos', 'Presunto']
}
var pizzaFrango = {
  name: 'Pizza Frango',
  price: '9',
  ingredients: ['Queijo Mozzarela', 'Frango']
}
var pizzaPresunto = {
  name: 'Pizza Presunto',
  price: '9',
  ingredients: ['Queijo Mozzarela', 'Presunto']
}
var pizzaCarbonara = {
  name: 'Pizza Presunto',
  price: '9',
  ingredients: ['Queijo Mozzarela', 'Bacon', 'Molho Carbonara', 'Oregãos']
}
var agua = {
  name: 'agua',
  price: '1.5',
  ingredients: ['Água', 'Gelo']
}
var sevenup = {
  name: 'sevenup',
  price: '1.5',
  ingredients: ['Sevenup', 'Gelo']
}
var cocacola = {
  name: 'Coca-Cola',
  price: '1.5',
  ingredients: ['Coca-Cola', 'Gelo']
}
var fanta = {
  name: 'Fanta',
  price: '1.5',
  ingredients: ['Fanta', 'Gelo']
}
var pepsi = {
  name: 'Pepsi',
  price: '1.5',
  ingredients: ['Pepsi', 'Gelo']
}
var brigadeiro = {
  name: 'Brigadeiro',
  price: '1.5',
  ingredients: ['Brigadeiro']
}
var geladoMorango = {
  name: 'Gelado de Morango',
  price: '1.5',
  ingredients: ['Gelado de Morango']
}
var mousseChocolate = {
  name: 'Mousse de Chocolate',
  price: '1.5',
  ingredients: ['Mousse de Chocolate']
}
var saladaFruta = {
  name: 'Salada de Fruta',
  price: '1.5',
  ingredients: ['Salada de Fruta']
}

function addToCart (itemName) {
  switch (itemName) {
    case 'quatro-estacoes':
      order.push(pizzaQuatroEstacoes);
      break;
    case 'quatro-queijos':
      order.push(pizzaQuatroQueijos);
      break;
    case 'frango':
      order.push(pizzaFrango);
      break;
    case 'presunto':
      order.push(pizzaPresunto);
      break;
    case 'carbonara':
      order.push(pizzaCarbonara);
      break;
    case 'agua':
      order.push(agua);
      break;
    case 'sevenup':
      order.push(sevenup);
      break;
    case 'coca-cola':
      order.push(cocacola);
      break;
    case 'fanta':
      order.push(fanta);
      break;
    case 'pepsi':
      order.push(pepsi);
      break;
    case 'brigadeiro':
      order.push(brigadeiro);
      break;
    case 'gelado-morango':
      order.push(geladoMorango);
      break;
    case 'mousse-chocolate':
      order.push(mousseChocolate);
      break;
    case 'salada-fruta':
      order.push(saladaFruta);
      $(".cart").append("Some appended text.");
      break;
  }
}

function callWaiter () {
  alert('Empregado a caminho')
}

function displayMenu () {
  alert('Mostrar menu')
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
