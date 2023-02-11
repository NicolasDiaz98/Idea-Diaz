
let vidaGatito = 7;
const salvarGatito = 0;
const muereGatito = 2;


for ( round = 1; round < 6; round +=1) {

    let giro = Math.round(Math.random());

    console.log("----------- " + round + " giro -----------");

    if (giro===1) {

        vidaGatito -= salvarGatito;

        console.log("Muy bien!! Sigue cuidando al gatito!!");
        console.log("Por ahora su vida es de "  + vidaGatito);

        document.write('<div class="card__Gatito"><h2 class="h2__card">Muy bien!! Sigue cuidando al gatito!!</h2><img src="./assets/img/gato-choque5.jpg"/></div>')
    } else {
    
        vidaGatito -= muereGatito;

        if (vidaGatito < 0) {

            vidaGatito = 0
        }
    
        console.log("Noooo!! Cuidado con el gatito!!" );
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

    console.log("Felicitaciones salvaste al gatito!! Seran amigos por siempre!!");

    document.write('<div class="card__Final"><h2 class="h2__cardFinal">Felicitaciones salvaste al gatito!!<br>Seran amigos por siempre!!</h2><img src="./assets/img/gato-feliz.jpg"/></div>');

    document.write('<h2 class="h2__cardFinal--negro">Muchas gracias por jugar!!<br>Para salvar otra vez al gatito haz <a href="index.html">clíck aquí</a></h2>');
} else {

    console.log("Asesino mataste al gatito!! Fuera de aquí!!");

    document.write('<div class="card__Final"><h2 class="h2__cardFinal">Asesino mataste al gatito!!<br>Fuera de aquí!!</h2><img src="./assets/img/matandoGatito.jpg"/></div>');

    document.write('<h2 class="h2__cardFinal--negro">Esto no va a quedar así!!<br>Para salvar al gatito haz <a href="index.html">clíck aquí</a></h2>');
}



 