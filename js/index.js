/* 
index.js
Estructura:
     - Animación del cursor
     - Animación para cambiar el color de las Grid-img
     - Animación para abrir y cerrar el menú de navegación en responsive
     - Animación para abrir y cerrar los apartados About y Contact
*/

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

//Seleccionamos todas las imagenes una por una.
const imguno = document.querySelector(`.Grid-img--one`)
const imgdos = document.querySelector('.Grid-img--two')
const imgtres = document.querySelector('.Grid-img--three')
const imgcuatro = document.querySelector('.Grid-img--four')
const imgcinco = document.querySelector('.Grid-img--five')
const imgseis = document.querySelector('.Grid-img--six')
const imgsiete = document.querySelector('.Grid-img--seven')
const imgocho = document.querySelector('.Grid-img--eight')
const imgnueve = document.querySelector('.Grid-img--nine')

//Seleccionamos todos los titulos del menú de navegación uno por uno.
const headeruno = document.querySelector(`.Header-a--one`)
const headerdos = document.querySelector('.Header-a--two')
const headertres = document.querySelector('.Header-a--three')
const headercuatro = document.querySelector('.Header-a--four')
const headercinco = document.querySelector('.Header-a--five')
const headerseis = document.querySelector('.Header-a--six')
const headersiete = document.querySelector('.Header-a--seven')
const headerocho = document.querySelector('.Header-a--eight')
const headernueve = document.querySelector('.Header-a--nine')

headeruno.addEventListener(`mouseover`, () => {
     //Creamos un evento para cuando el ratón este por encima.
     //Aplicamos el cambio de estilo a las etiquetas asignadas.
     imguno.style.opacity= `100%`
     imguno.style.filter = `grayscale(0%)`
})
headeruno.addEventListener(`mouseout`, () => {
     //Creamos un evento para cuando el ratón este por encima.
     //Aplicamos el estilo en el que estaban las etiquetas en un principio
     imguno.style.opacity= `90%`
     imguno.style.filter = `grayscale(100%)`
}) 
/*Tanto el `resize` como el `if` de a continuación, fueron sacados a través de Chatgpt, que me enseñó una forma de corregir un error que tenía a través de Javascript.
Me resultaba más sencillo realizarlo de esta forma, que cambiar el CSS, aunque soy consciente que se podría de hacer de otra forma por CSS.*/
window.addEventListener('resize', () => {
     //Creamos un evento en función del tamaño de la ventana
     if (window.innerWidth < 1100) {
          //Si el tamaño de la ventana es menor que 1100px, el filtro en gris tendrá 0%
     imguno.style.filter = `grayscale(0%)`
     }
     else{
          //Si no, el filtro en gris tendrá 100% y volverá a la estética que tendía desde un principio.
     imguno.style.filter = `grayscale(100%)`
     }
});
/* Con esto consigo que cuando la ventana se haga más pequeña, las imágenes estén en color, pero si vuelvo a hacerla grande, los cambios de un principio vuelven a hacer efecto.*/
/* Esto se repetirá con el resto de las imágenes */


headerdos.addEventListener(`mouseover`, () => {
     imgdos.style.opacity= `100%`
     imgdos.style.filter = `grayscale(0%)`
})
headerdos.addEventListener(`mouseout`, () => {
     imgdos.style.opacity= `90%`
     imgdos.style.filter = `grayscale(100%)`
})
window.addEventListener('resize', () => {
     if (window.innerWidth < 1100) {
     imgdos.style.filter = `grayscale(0%)`
     }
     else{
     imgdos.style.filter = `grayscale(100%)`
     }
});
headertres.addEventListener(`mouseover`, () => {
     imgtres.style.opacity= `100%`
     imgtres.style.filter = `grayscale(0%)`
})
headertres.addEventListener(`mouseout`, () => {
     imgtres.style.opacity= `90%`
     imgtres.style.filter = `grayscale(100%)`
})
window.addEventListener('resize', () => {
     if (window.innerWidth < 1100) {
     imgtres.style.filter = `grayscale(0%)`
     }
     else{
     imgtres.style.filter = `grayscale(100%)`
     }
});
headercuatro.addEventListener(`mouseover`, () => {
     imgcuatro.style.opacity= `100%`
     imgcuatro.style.filter = `grayscale(0%)`
})
headercuatro.addEventListener(`mouseout`, () => {
     imgcuatro.style.opacity= `90%`
     imgcuatro.style.filter = `grayscale(100%)`
})
window.addEventListener('resize', () => {
     if (window.innerWidth < 1100) {
     imgcuatro.style.filter = `grayscale(0%)`
     }
     else{
     imgcuatro.style.filter = `grayscale(100%)`
     }
});
headercinco.addEventListener(`mouseover`, () => {
     imgcinco.style.opacity= `100%`
     imgcinco.style.filter = `grayscale(0%)`
})
headercinco.addEventListener(`mouseout`, () => {
     imgcinco.style.opacity= `90%`
     imgcinco.style.filter = `grayscale(100%)`
})
window.addEventListener('resize', () => {
     if (window.innerWidth < 1100) {
     imgcinco.style.filter = `grayscale(0%)`
     }
     else{
     imgcinco.style.filter = `grayscale(100%)`
     }
});
headerseis.addEventListener(`mouseover`, () => {
     imgseis.style.opacity= `100%`
     imgseis.style.filter = `grayscale(0%)`
})
headerseis.addEventListener(`mouseout`, () => {
     imgseis.style.opacity= `90%`
     imgseis.style.filter = `grayscale(100%)`
})
window.addEventListener('resize', () => {
     if (window.innerWidth < 1100) {
     imgseis.style.filter = `grayscale(0%)`
     }
     else{
     imgseis.style.filter = `grayscale(100%)`
     }
});
headersiete.addEventListener(`mouseover`, () => {
     imgsiete.style.opacity= `100%`
     imgsiete.style.filter = `grayscale(0%)`
})
headersiete.addEventListener(`mouseout`, () => {
     imgsiete.style.opacity= `90%`
     imgsiete.style.filter = `grayscale(100%)`
})
window.addEventListener('resize', () => {
     if (window.innerWidth < 1100) {
     imgsiete.style.filter = `grayscale(0%)`
     }
     else{
     imgsiete.style.filter = `grayscale(100%)`
     }
});
headerocho.addEventListener(`mouseover`, () => {
     imgocho.style.opacity= `100%`
     imgocho.style.filter = `grayscale(0%)`
})
headerocho.addEventListener(`mouseout`, () => {
     imgocho.style.opacity= `90%`
     imgocho.style.filter = `grayscale(100%)`
})
window.addEventListener('resize', () => {
     if (window.innerWidth < 1100) {
     imgocho.style.filter = `grayscale(0%)`
     }
     else{
     imgocho.style.filter = `grayscale(100%)`
     }
});
headernueve.addEventListener(`mouseover`, () => {
     imgnueve.style.opacity= `100%`
     imgnueve.style.filter = `grayscale(0%)`
})
headernueve.addEventListener(`mouseout`, () => {
     imgnueve.style.opacity= `90%`
     imgnueve.style.filter = `grayscale(100%)`
})
window.addEventListener('resize', () => {
     if (window.innerWidth < 1100) {
     imgnueve.style.filter = `grayscale(0%)`
     }
     else{
     imgnueve.style.filter = `grayscale(100%)`
     }
});

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
