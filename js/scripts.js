// console.time("1");

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    // console.log("2");
    // console.timeEnd("1");

    // getElementById
    // var logo = document.getElementById('logo');
    // var navegacion = document.getElementById ('navegacion');
    // console.log(logo.getAttribute ('class') );
    // con esto borro la barra de navegacion
    // navegacion.style.display = 'none';

    // getElementsByClassName
    // var navegacion = document.getElementsByClassName ('navegacion');
    // console.log(navegacion[0]);
    // var contenido = document.getElementsByClassName ('contenido');
    // console.log(contenido[0]);
    // contenido[0].style.display = 'none';


    // trae por tag html
    // let enlaces = document.getElementsByTagName('a');
    // console.log(enlaces);

    // for (const element of enlaces) {
    //   element.setAttribute('target','_blank');
    // }

    // for (let i = 0; i < enlaces.length; i++) {
    //   enlaces[i].setAttribute('target','_blank');
    // }

    // trae solo los anchor dentro del id sidebar
    // let enlacesSideBar = document.getElementById('sidebar').getElementsByTagName('a');
    // console.log(enlacesSideBar);

    // for (const enlace of enlacesSideBar) {
    //   enlace.setAttribute('href','https://www.google.com');
    // }



    // querySelector
    // let logo = document.querySelector('#logo');
    // console.log(logo);

    // trae solo el h2
    // let encabezado = document.querySelector ('aside h2');
    // console.log(encabezado);

    // let encabezados = document.querySelectorAll ('h2, footer p');
    // console.log(encabezados);

    // encabezados[0].innerText = 'frula';

    // let enlaces = document.querySelectorAll ('a');
    // enlaces.forEach ( element => {
    //   console.log(element);
    // });

    // querySelectorAll
    // let enlace = document.querySelectorAll ('a');

    // enlace.forEach ( element => {
    //   console.log(element.innerText);
    // });

    // nodos
    // let enlaces = document.querySelectorAll ('#menu ul li a');
    // console.log(enlaces);

    // enlaces.forEach ( element => {
      // console.log(element.nodeType);
      // console.log(element.nodeName);
      // console.log(element.attributes);
      // console.log(element.firstChild);
    //   console.log(element.firstChild.nodeValue);
    // });

    // enlaces[0].firstChild.nodeValue = 'Home';

    // crear contenido nuevo
    // let sideBar = document.querySelector('#sidebar');

    // console.log(sideBar);

    // let nuevoElemento = document.createElement('h1');
    // let nuevoTexto = document.createTextNode('Hola Mundo');

    // nuevoElemento.appendChild(nuevoTexto);
    // sideBar.appendChild(nuevoElemento);
    
    // agregar entrada 6
    // let enlacesSideBar = document.querySelectorAll ('#sidebar ul');
    // console.log(enlacesSideBar);
    // let nuevoEnlace = document.createElement('a');
    // nuevoEnlace.setAttribute('href','https://www.google.com.ar');
    // let textoEnlace = document.createTextNode('Entrada 6');

    // nuevoEnlace.appendChild(textoEnlace);
    
    // let nuevaLista = document.createElement('li');
    // nuevaLista.appendChild (nuevoEnlace);
    // enlacesSideBar[0].appendChild (nuevaLista);

    // clon de nodo
    // let contenido = document.querySelectorAll('main');
    // console.log(contenido);

    // let nuevoContenido = contenido[0].cloneNode(true);
    // let sideBar = document.querySelector('aside');

    // sideBar.insertBefore(nuevoContenido, sideBar.childNodes[5]);


    //
    // let sideBar = document.querySelector('aside') ;
    // let masVisitados = document.createElement('h2');
    // let textoVisitados = document.createTextNode ('Post más visitados');

    // masVisitados.appendChild(textoVisitados);
    // sideBar.insertBefore (masVisitados, sideBar.childNodes[0]);

    // var contenido = document.querySelectorAll ('main h2');

    // contenido.forEach ( element => {
    //   console.log(element);
    //   let nuevoElemento = document.createElement('li');
    //   let nuevoTexto = document.createTextNode( element.firstChild.nodeValue);
    //   nuevoElemento.appendChild ( nuevoTexto );

    //   sideBar.insertBefore(nuevoElemento, sideBar.childNodes[1]);
    // });

    // remover un nodo, primero hay que ir al padre y eliminarlo
    // var primerPost = document.querySelector('main article');
    // console.log(primerPost);

    // primerPost.parentNode.removeChild(primerPost);

    // let enlace = document.querySelector('#navegacion nav ul li a')

    // console.log(enlace);
    // enlace.parentNode.removeChild (enlace);

    // reemplazo de nodos
    let viejoNodo = document.querySelector('main h2');
    let nuevoNodo = document.querySelector('footer h2');

    viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo)

    let nuevoTitulo = document.createElement('h2');
    let nuevoTexto = document.createTextNode('Hola mundo');

    nuevoTitulo.appendChild(nuevoTexto);

    viejoNodo = document.querySelector('main h2');
    console.log(viejoNodo);
    viejoNodo.parentNode.replaceChild (nuevoTitulo, viejoNodo);




  });
})();

// console.log("3");