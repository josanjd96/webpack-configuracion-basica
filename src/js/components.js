
import '../css/comonents.css';

export const saludar = ( name ) => {

    console.log( 'Creando etiqueta h1, en el html ');

    const h1 = document.createElement('h1');
    h1.innerText = `Hello ${ name }, how are you?`;


    document.body.append( h1 );

}

