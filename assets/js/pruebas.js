//LOGIN

const formulario = document.querySelector('#formulario')

let usuarios = [];

const agregarUsuario = (evt) => {
    evt.preventDefault()

    const nombre = document.querySelector('#loginUsuario').value;
    const contraseña = document.querySelector('#loginPassword').value;

    if (nombre == '') {
        console.log('Usuario incorrecto');
        return;
    }else if(contraseña == '') {
        console.log('Contraseña incorrecta')
        return;
    }

    const usuarioObj = {
        id: nombre,
        psw: contraseña
    }
    
    usuarios.push(usuarioObj);
    
    sessionStorage.setItem (nombre, contraseña);

    formulario.reset();

    setTimeout(()=> {
        sessionStorage.setItem('nombreDeUsuario', nombre);
        location.href = "/juego.html"
    },2000)
}
 
if (formulario) {
  formulario.addEventListener('submit', agregarUsuario);
}

//JUEGO

const nombreUsuario = sessionStorage.getItem('nombreDeUsuario');


if(location.pathname.includes('juego.html')) {

    let bienvenida = document.querySelector('#bienvenida');
    let despedida = document.querySelector('#despedida');


    let contenedorDelJuego = document.querySelector('#contenedorTarjetas');
    let contenedorCardFinal = document.querySelector('#contenedorTarjetaFinal');
    let reiniciarJuego = document.querySelector('#volverAJugar');
    let roundCard = document.querySelector('#round1');

    let card = document.createElement("div");
    let p = document.createElement("p");
    let p2 = document.createElement("p");

    p.textContent = `Hola ${nombreUsuario}, te presento mi juego en contra de la muerte de los gatitos, espero que te guste!`;
    bienvenida.appendChild(p);

    let vidaGatito = 7;
    const salvarGatito = 0;
    const muereGatito = 2;


for ( round = 1; round < 6; round +=1) {

    let giro = Math.round(Math.random());

    card.innerHTML = `
                            <p class="round">----------- ${round} giro -----------</p>
                        `

    roundCard.appendChild(card);

    if (giro===1) {

        vidaGatito -= salvarGatito;

        card.innerHTML = `
                            <h2 class="h2__card">Muy bien ${nombreUsuario}!! Sigue cuidando al gatito!!</h2>
                            <img src="./assets/img/gato-choque5.jpg"/>
                            <p>Por ahora su vida es de ${vidaGatito}</p>
                        `

        contenedorDelJuego.appendChild(card);              
    } else {
    
        vidaGatito -= muereGatito;

        if (vidaGatito < 0) {

            vidaGatito = 0
        }
        
        card.innerHTML = `
                            <h2 class="h2__card">Noooo!! ${nombreUsuario}!! Cuidado con el gatito!!</h2>
                            <img src="./assets/img/gato-Gritando.jpg"/>
                            <p>Por ahora su vida es de ${vidaGatito}</p>
                        `

        contenedorDelJuego.appendChild(card); 
    }

    if (vidaGatito > 0) {

        continue;
    } else {

        break;
    }
}

if (vidaGatito > 0) {

    card.innerHTML = `
                        <h2 class="h2__cardFinal">Felicitaciones ${nombreUsuario} salvaste al gatito!!<br>Seran amigos por siempre!!</h2>
                        <img src="./assets/img/gato-feliz.jpg"/>
                        `

    contenedorCardFinal.appendChild(card);

    card.innerHTML = `
                        <h2 class="h2__cardFinal--negro">Muchas gracias por jugar!!<br>
                        Para salvar otra vez al gatito haz <span><a href=/juego.html">clíck aquí</a></span></h2>
                        `

    reiniciarJuego.appendChild(card);
} else {

    card.innerHTML = `
                        <h2 class="h2__cardFinal">Asesino mataste al gatito!!<br>Fuera de aquí!!</h2>
                        <img src="./assets/img/matandoGatito.jpg"/>

                        <h2 class="h2__cardFinal--negro">Esto no va a quedar así!!<br>Para salvar al gatito haz <span><a href="/juego.html">clíck aquí</a></span></h2>
                        `

    reiniciarJuego.appendChild(card);  
}


p2.textContent = `${nombreUsuario}, gracias por jugar!!`;
despedida.appendChild(p2);
}


//TIENDA
