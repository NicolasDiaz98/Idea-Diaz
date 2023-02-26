
let vidaGatito = 7;
const salvarGatito = 0;
const muereGatito = 2;
const nombre = prompt("Bienvenido!! Ingresa tu nombre para jugar");

const mensajes = {
    saludo: nombre => console.log("Hola " + nombre + ", te presento mi juego en contra de la muerte de los gatitos, espero que te guste!"),

    despedida: nombre => console.log(nombre + ", gracias por jugar!!"),
    
}

mensajes.saludo(nombre);

for ( round = 1; round < 6; round +=1) {

    let giro = Math.round(Math.random());

    console.log("----------- " + round + " giro -----------");

    if (giro===1) {

        vidaGatito -= salvarGatito;

        console.log("Muy bien!! " + nombre + " Sigue cuidando al gatito!!");
        console.log("Por ahora su vida es de "  + vidaGatito);

        document.write('<div class="card__Gatito"><h2 class="h2__card">Muy bien!! Sigue cuidando al gatito!!</h2><img src="./assets/img/gato-choque5.jpg"/></div>')
    } else {
    
        vidaGatito -= muereGatito;

        if (vidaGatito < 0) {

            vidaGatito = 0
        }
    
        console.log("Noooo!! " + nombre + " Cuidado con el gatito!!" );
        console.log("Ahora su vida es de " + vidaGatito);

        document.write('<div class="card__Gatito"><h2 class="h2__card">Noooo!! Cuidado con el gatito!!</h2><img src="./assets/img/gato-Gritando.jpg"/></div>')
    }

    if (vidaGatito > 0) {

        continue;
    } else {

        break;
    }
}

if (vidaGatito > 0) {

    console.log("Felicitaciones " + nombre + " salvaste al gatito!! Seran amigos por siempre!!");

    document.write('<div class="card__Final"><h2 class="h2__cardFinal">Felicitaciones salvaste al gatito!!<br>Seran amigos por siempre!!</h2><img src="./assets/img/gato-feliz.jpg"/></div>');

    document.write('<h2 class="h2__cardFinal--negro">Muchas gracias por jugar!!<br>Para salvar otra vez al gatito haz <a href="index.html">clíck aquí</a></h2>');

} else {

    console.log(nombre + " Asesino mataste al gatito!! Fuera de aquí!!");

    document.write('<div class="card__Final"><h2 class="h2__cardFinal">Asesino mataste al gatito!!<br>Fuera de aquí!!</h2><img src="./assets/img/matandoGatito.jpg"/></div>');

    document.write('<h2 class="h2__cardFinal--negro">Esto no va a quedar así!!<br>Para salvar al gatito haz <a href="index.html">clíck aquí</a></h2>');
    
}

mensajes.despedida(nombre);

console.log("-----------Bienvenido a la tienda virtual de Salvando al gatito-----------")

const tienda = [
    {
        item: 'Cama',
        precio: 2000
    },
    {
        item: 'Manta de lana',
        precio: 500
    },
    {
        item: 'Juguete pelota',
        precio: 150
    },
    {
        item: 'Juguete rascador',
        precio: 200
    },
    {
        item: 'Juguete cuerda',
        precio: 80
    },
    {
        item: 'Shampoo',
        precio: 250
    },
    {
        item: 'Shampoo especial',
        precio: 500
    },
    {
        item: 'Tratamiento para brillo de pelaje',
        precio: 400
    },
    {
        item: 'Ropa',
        precio: 300
    },
]


// for(const producto of tienda) {

//     console.log("Producto: " + producto.item + " - " + "Precio: $" + producto.precio);
// }


alert("Estamos trabajando en nuestra nueva tienda para ayudar a los gatitos, a continuación nos gustaría que fijes un rango de precio mínimo y máximo en tus expectativas de costo de los productos");

let minimo = Number(prompt('Ingrese un precio mínimo'));
let maximo = Number(prompt('Ingrese un precio máximo'));

const datosBusqueda = {
    minimo: "",
    maximo: ""
}

function mostrarTienda(tienda){
    
    tienda.forEach(producto => {
        console.log(producto.item + " - $" + producto.precio);
    });
}

function noResultado(){

    console.log ('No hay resultados!');
    alert('No hay resultados!');
}

function filtrarMinimo(producto){
    if(datosBusqueda.minimo){
        return producto.precio >= datosBusqueda.minimo;
    } 
    return producto;
}

function filtrarMaximo(producto){
    if(datosBusqueda.maximo){
        return producto.precio <= datosBusqueda.maximo;
    } 
    return producto;
}

function filtrarTienda(){

    let resultado = tienda.filter(filtrarMinimo).filter(filtrarMaximo);

    if (resultado.length) {
        mostrarTienda(resultado);
    } else {
        noResultado();
    }
}

filtrarTienda();












 