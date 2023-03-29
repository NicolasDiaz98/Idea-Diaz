//LOGIN

const formulario = document.querySelector('#formulario');

let usuarios = [];

const agregarUsuario = (evt) => {
    evt.preventDefault()

    const nombre = document.querySelector('#loginUsuario').value;
    const contraseña = document.querySelector('#loginPassword').value;

    if (nombre == '') {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Usuario incorrecto',
            showConfirmButton: false,
            color: 'rgb(144, 53, 230)',
            background: '#fff',
            timer: 1500
          })
        return;
    }else if(contraseña == '') {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Contraseña incorrecta',
            showConfirmButton: false,
            color: 'rgb(144, 53, 230)',
            background: '#fff',
            timer: 1500
          })
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

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login correcto',
        showConfirmButton: false,
        color: 'rgb(144, 53, 230)',
        background: '#fff',
        timer: 1500
      })
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

    const boton = document.querySelector('#boton');

//FINAL VARIABLES

boton.addEventListener('click', function() {

    boton.remove();

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
                                <h2 class="h2__card">Muy bien ${nombreUsuario} !!! Sigue cuidando al gatito !!!!</h2>
                                <img src="./assets/img/gato-choque5.jpg"/>
                                <p class="detalleVidaGatos">Por ahora su vida es de ${vidaGatito}</p>
                            `
    
            contenedorDelJuego.appendChild(card);              
        } else {
            
    
            vidaGatito -= muereGatito;
    
            if (vidaGatito < 0) {
    
                vidaGatito = 0
                break;
            }
            
            card.innerHTML = `
                                <h2 class="h2__card">Noooo!! ${nombreUsuario}!! Cuidado con el gatito la próxima!!</h2>
                                <img src="./assets/img/gato-Gritando.jpg"/>
                                <p class="detalleVidaGatos">Por ahora su vida es de ${vidaGatito}</p>
                            `
    
            contenedorDelJuego.appendChild(card); 
        }
    
        if (vidaGatito <= 0) {
    
            break;
        } else {
            
            continue;
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
                            <h2 class="h2__cardFinal my-2">Asesino mataste al gatito!!<br>Fuera de aquí!!</h2>
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


    let btn = document.createElement('button');
    let btnIrATienda = document.querySelector('#btnIrTienda');
    btn.className = "btnATienda";

    btn.innerHTML = `
                        <span class="animacionBtn"> Ir a la Tienda </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
                    
                    `

    btnIrATienda.appendChild(btn);

    btnIrTienda.addEventListener('click', function(){
        location.href ='tienda.html';
    })
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


        const tienda = [
            {
                item: 'Cama',
                precio: 2000
            },
            {
                item: 'Cama de lana',
                precio: 2500
            },
            {
                item: 'Cama de seda',
                precio: 3000
            },
            {
                item: 'Manta de seda',
                precio: 800
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
                item: 'Kit de juguetes',
                precio: 400
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
                item: 'Tratamiento de pelaje',
                precio: 400
            },
            {
                item: 'Ropa',
                precio: 300
            },
            {
                item: 'Zapatos',
                precio: 200
            },
            {
                item: 'Casa tamaño pequeño',
                precio: 6000
            }, 
            {
                item: 'Casa tamaño mediano',
                precio: 9000
            },
            {
                item: 'Casa tamaño grande',
                precio: 12000
            }
        ]

        let totalCarrito = 0;

        function generarIdCarrito() {

            for(let i = 0; i < tienda.length; i+=1) {

                const id = "carrito" + (i + 1);

                tienda[i].id = id;

                localStorage.setItem(id, JSON.stringify(tienda[i]));
            }

        }
        
        function actualizarTotalCarrito () {
            const totalCarritoP = document.querySelector('#totalCarrito');
            totalCarritoP.textContent = `TOTAL - $${totalCarrito}`;
        }
        
        function agregarCarrito () {
            
        
        if (window.innerWidth < 1000) {

            for (i = 1; i <= tienda.length; i += 1) {

                const btnCarrito = document.querySelector(`#carrito${i}`);
                const producto = JSON.parse(localStorage.getItem(`carrito${i}`));
    
                btnCarrito.addEventListener('touchstart', function() {
                    
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Agregado al carrito'
                      })
    
                    let card = document.createElement("div");
                    card.classList.add("contenedorP");
                    const bodyCarrito = document.querySelector('#bodyCarrito');
                    
    
                    card.innerHTML = `<p class="pCarrito">${producto.item} - $${producto.precio}</p><button class="btnRemoveCarrito"></button>
                                `
                    bodyCarrito.appendChild(card);
    
                    totalCarrito += producto.precio;
                    actualizarTotalCarrito();
                
                    const btnRemoveCarrito = card.querySelector('.btnRemoveCarrito');
    
                    btnRemoveCarrito.addEventListener('touchstart', function(){
    
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          
                          Toast.fire({
                            icon: 'error',
                            title: 'Eliminado correctamente'
                          })
    
                    bodyCarrito.removeChild(card);
    
                    totalCarrito -= producto.precio;
                    actualizarTotalCarrito();   
                });
                });
                } 
        } else {
            for (i = 1; i <= tienda.length; i += 1) {

                const btnCarrito = document.querySelector(`#carrito${i}`);
                const producto = JSON.parse(localStorage.getItem(`carrito${i}`));
    
                btnCarrito.addEventListener('click', function() {
                    
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Agregado al carrito'
                      })
    
                    let card = document.createElement("div");
                    card.classList.add("contenedorP");
                    const bodyCarrito = document.querySelector('#bodyCarrito');
                    
    
                    card.innerHTML = `<p class="pCarrito">${producto.item} - $${producto.precio}</p><button class="btnRemoveCarrito"></button>
                                `
                    bodyCarrito.appendChild(card);
    
                    totalCarrito += producto.precio;
                    actualizarTotalCarrito();
                
                    const btnRemoveCarrito = card.querySelector('.btnRemoveCarrito');
    
                    btnRemoveCarrito.addEventListener('click', function(){
    
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          
                          Toast.fire({
                            icon: 'error',
                            title: 'Eliminado correctamente'
                          })
    
                    bodyCarrito.removeChild(card);
    
                    totalCarrito -= producto.precio;
                    actualizarTotalCarrito();   
                });
                });
                } 
        }

        
        }   

            
        generarIdCarrito();
        agregarCarrito();
        actualizarTotalCarrito();
     
}

