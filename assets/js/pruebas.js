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
        location.href = "juego.html"
    },2000)
}
 
if (formulario) {
  formulario.addEventListener('submit', agregarUsuario);
}

//JUEGO

const nombreUsuario = sessionStorage.getItem('nombreDeUsuario');


if(location.pathname.includes('juego.html')) {


//VARIABLES DE DOM

    let bienvenida = document.querySelector('#bienvenida');
    let despedida = document.querySelector('#despedida');


    let contenedorDelJuego = document.querySelector('#contenedorTarjetas');
    let contenedorCardFinal = document.querySelector('#contenedorTarjetaFinal');
    let reiniciarJuego = document.querySelector('#volverAJugar');
    

    let p = document.createElement("p");
    let p2 = document.createElement("p");

    p.textContent = `Hola ${nombreUsuario}, te presento mi juego en contra de la muerte de los gatitos, espero que te guste!`;
    bienvenida.appendChild(p);

    let vidaGatito = 7;
    const salvarGatito = 0;
    const muereGatito = 2;

    const boton = document.querySelector('#boton')
//FINAL VARIABLES

boton.addEventListener('click', function() {

    for ( round = 1; round < 6; round +=1) {

        let card = document.createElement("div");
        card.className = "card__Gatito"
        let p = document.createElement("p");
    
        p.innerHTML = `
                                <p class="round">----------- ${round} giro -----------</p>
                            `
    
        contenedorDelJuego.appendChild(p);
    
        let giro = Math.round(Math.random());
    
        if (giro===1) {
    
            vidaGatito -= salvarGatito;
    
            card.innerHTML = `
                                <h2 class="h2__card">Muy bien ${nombreUsuario}!! Sigue cuidando al gatito!!</h2>
                                <img src="./assets/img/gato-choque5.jpg"/>
                                <p class="detalleVidaGatos">Por ahora su vida es de ${vidaGatito}</p>
                            `
    
            contenedorDelJuego.appendChild(card);              
        } else {
            
            let card = document.createElement("div");
            card.className = "card__Gatito"
    
            vidaGatito -= muereGatito;
    
            if (vidaGatito < 0) {
    
                vidaGatito = 0
            }
            
            card.innerHTML = `
                                <h2 class="h2__card">Noooo!! ${nombreUsuario}!! Cuidado con el gatito!!</h2>
                                <img src="./assets/img/gato-Gritando.jpg"/>
                                <p class="detalleVidaGatos">Por ahora su vida es de ${vidaGatito}</p>
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
    
        let card = document.createElement("div");
        let card2 = document.createElement("div");
        card.className = "card__Final"
        card2.className = "card__Final2"
    
        card.innerHTML = `
                            <h2 class="h2__cardFinal">Felicitaciones ${nombreUsuario} salvaste al gatito!!<br>Seran amigos por siempre!!</h2>
                            <img src="./assets/img/gato-feliz.jpg"/><br>
                            `
    
        contenedorCardFinal.appendChild(card);
    
        card2.innerHTML = `
                            <h2 class="h2__cardFinal--negro my-5">Muchas gracias por jugar!!</h2>
                            <h2 class="h2__cardFinal--negro my-5">Para salvar otra vez al gatito haz <span><a href="juego.html">clíck aquí</a></span></h2
                            `
    
        reiniciarJuego.appendChild(card2);
    } else {
    
        let card = document.createElement("div");
        let card2 = document.createElement("div");
        card.className = "card__Final"
        card2.className = "card__Final2"
    
        card.innerHTML = `
                            <h2 class="h2__cardFinal my-5">Asesino mataste al gatito!!<br>Fuera de aquí!!</h2>
                            <img src="./assets/img/matandoGatito.jpg"/>
                            `
        contenedorCardFinal.appendChild(card);  

        card2.innerHTML =   `<h2 class="h2__cardFinal--negro my-5" >Esto no va a quedar así!!<br>
                            Para salvar al gatito haz <span><a href="juego.html">clíck aquí</a></span></h2>
                            `

        reiniciarJuego.appendChild(card2);
    }

    
    p2.textContent = `${nombreUsuario}, gracias por jugar!!`;
    despedida.appendChild(p2);
    }

)}


//TIENDA

if(location.pathname.includes('tienda.html')) {

    function toggleDarkMode() {
        const body = document.querySelector('body');
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('isDarkMode', isDarkMode);
    }
      
      
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
      if (isDarkMode) {
        document.querySelector('body').classList.add('dark-mode');
        }
}

