
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
    } else {
    
        vidaGatito -= muereGatito;

        if (vidaGatito < 0) {

            vidaGatito = 0
        }
    
        console.log("Noooo!! Cuidado con el gatito!!" );
        console.log("Ahora su vida es de " + vidaGatito);
    }

    if (vidaGatito > 0) {

        continue;
    } else {

        break;
    }
}

if (vidaGatito > 0) {

    console.log("Felicitaciones salvaste al gatito!! Seran amigos por siempre!!");
} else {

    console.log("Asesino mataste al gatito!! Fuera de aquí!!");
}

 