/* 
projecthubclub.js
Estructura:
     - Animación de imagenes con clase clicked.
     - Animación del cursor.
     - Animación para abrir y cerrar el menú de navegación en responsive
     - Animación para abrir y cerrar los apartados About y Contact
*/
//Seleccionamos todas las imágenes llamadas Up-img
const upimages = document.querySelectorAll('.Up-img');

upimages.forEach(img => {
     //Creamos un forEach al haber seleccionado una lista de nodos, así nos permite configurar un mismo comportamiento para cada imagen. 
    img.addEventListener('click', () => {
     //Añadimos un evento para cuando hagamos click en las imágenes.
        img.classList.toggle('clicked');
        //Con toggle alternamos la clase clicked, en el elemento clickeado.
        //Si la imagen ya tiene clicked se elimina y sino tiene, se agrega.
    });
});

//Seleccionamos todas las imágenes llamadas Down-img
const downimages = document.querySelectorAll('.Down-img');

downimages.forEach(img => {
     //Creamos un forEach al haber seleccionado una lista de nodos, así nos permite configurar un mismo comportamiento para cada imagen. 
    img.addEventListener('click', () => {
     //Añadimos un evento para cuando hagamos click en las imágenes.
        img.classList.toggle('clicked');
        //Con toggle alternamos la clase clicked, en el elemento clickeado.
        //Si la imagen ya tiene clicked se elimina y sino tiene, se agrega.
    });
});

//Seleccionamos el div .Cursor.
const cursor = document.querySelector(`.Cursor`)
//Una función que hace que el Cursor persiga al ratón cuando se mueva.
window.addEventListener(`mousemove`, ( e ) => {
     //Creo una evento para cuando el ratón se mueva.
     //Obtengo la distancia en vertical y horizontal del ratón.
    let {clientX, clientY} = e
    console.log(e.clientX)
    console.log(e.clientY)
    //Aplico el movimiento al cursor a través de los datos que conseguimos antes.
    cursor.style.transform = `translatex(${e.clientX}px) translatey(${e.clientY}px)`
})

//Seleccionamos el botón about del menú de navegación.
const headerabout = document.querySelector(`.Header-a--about`)
//Seleccionamos el botón contact del menú de navegación.
const headercontact = document.querySelector(`.Header-a--contact`)
//Seleccionamos el botón de cerrar del apartado about.
const aboutcerrar = document.querySelector(`.About-close`)
//Seleccionamos el botón de cerrar del apartado contact.
const contactcerrar = document.querySelector(`.Info-close`)
//Seleccionamos el apartado de about entero.
const about = document.querySelector(`.Section-info`)
//Seleccionamos el apartado de contact entero.
const contact = document.querySelector(`.Section-contact`)

headerabout.addEventListener(`click`, () => {
     //Creamos un evento para cuando hagamos click en About.
     //Aplicamos los estilos para que la sección About aparezca.
     about.style.opacity= `1`
     about.style.pointerEvents = `auto`
})

aboutcerrar.addEventListener(`click`, () => {
     //Creamos un evento para cuando hagamos click en Close de About.
     //Aplicamos los estilos para que la sección About desaparezca y se "cierre".
     about.style.opacity = `0`
     about.style.pointerEvents = `none`
})

headercontact.addEventListener(`click`, () => {
     //Creamos un evento para cuando hagamos click en Contact.
     //Aplicamos los estilos para que la sección Contact aparezca.
     contact.style.opacity= `1`
     contact.style.pointerEvents = `auto`
})

contactcerrar.addEventListener(`click`, () => {
     //Creamos un evento para cuando hagamos click en Close de Contact.
     //Aplicamos los estilos para que la sección Contact desaparezca y se "cierre".
     contact.style.opacity = `0`
     contact.style.pointerEvents = `none`
})

//Seleccionamos el icono del menú de navegación.
const menu = document.querySelector(`.Header-svg`)
//Seleccionamos el icono de la cruz del menú de navegación.
const headerclose = document.querySelector(`.Header-close`)
//Seleccionamos el menú de navegación.
const headernav = document.querySelector(`.Header-nav`)
//Seleccionamos el espacio del menú de navegación.
const header = document.querySelector(`.Header`)

menu.addEventListener(`click`, () => {
    //Creamos un evento para cuando hagamos click en el icono de menú.
    if (window.innerWidth < 1100){
         //Aplicamos el estilo a el hueco de header, que lo hacemos más ancho porque irá por encima de la web.
         //Aplicamos los estilos a el menú de navegación y el icono de la cruz para que aparezcan.
         //Aplicamos el estilo a el icono de menú para que desaparezca.
         /* TODO ESTO OCURRIRÁ SI LA VENTANA ES MENOR QUE 1100px */
         header.style.width = `27%`
         headernav.style.display = `block`
         headerclose.style.display = `block`
         menu.style.display = `none`
    }
})

headerclose.addEventListener(`click`, () => {
    //Creamos un evento para cuando hagamos click en el icono de la cruz.
    if (window.innerWidth < 1100){
         //Aplicamos el estilo a el hueco de header, para que recupere su ancho original.
         //Aplicamos los estilos a el menú de navegación y el icono de la cruz para que desaparezcan.
         //Aplicamos el estilo a el icono de menú para que aparezca.
         /* TODO ESTO OCURRIRÁ SI LA VENTANA ES MENOR QUE 1100px */
         header.style.width = `10%`
         headernav.style.display = `none`
         headerclose.style.display = `none`
         menu.style.display = `block`
    }
})

window.addEventListener('resize', () => {
    //Creamos una evento para cuando cambiemos el tamaño de la ventana.
    if (window.innerWidth >= 1100){
         //Si es mayor que o igual a 1100px, vuelva al estado original de pantallas grandes.
      header.style.width = `10%`;
      headernav.style.display = `block`;
      headerclose.style.display = `none`;
      menu.style.display = `none`;
    } 
    else {
         //Si no, volverá a aparecer el icono de navegación y se realizará la animación anterior.
      header.style.width = `10%`
      headernav.style.display = `none`
      headerclose.style.display = `none`
      menu.style.display = `block`
    }
});