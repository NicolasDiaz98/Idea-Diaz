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


let vidaGatito = 7;
const salvarGatito = 0;
const muereGatito = 2;


//TIENDA
