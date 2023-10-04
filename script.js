const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }]


let main = document.createElement("main")

//Modelo 1

/*
let contenedor = document.createElement("section");
contenedor.classList.add("contenedor");


let cuadroLibro =[];
let titulo = [];
let autor = [];
let fecha = [];
let imagen = [];
let enlace = [];
let pais = [];
let lengua = [];
let paginas = [];

for (let i = 0; i<books.length; i++){
  cuadroLibro[i] = document.createElement("article");
  contenedor.appendChild(cuadroLibro[i]);
  cuadroLibro[i].classList.add("libro");

  titulo[i] = document.createElement("h3");
  titulo[i].appendChild(document.createTextNode(books[i].title));
  cuadroLibro[i].appendChild(titulo[i]);
  titulo[i].classList.add("titulo");

  autor[i] = document.createElement("h5");
  autor[i].appendChild(document.createTextNode("Author: " +books[i].author));
  cuadroLibro[i].appendChild(autor[i]);
  autor[i].classList.add("autor");

  fecha[i] = document.createElement("p");
  fecha[i].appendChild(document.createTextNode("Year: " + books[i].year));
  cuadroLibro[i].appendChild(fecha[i]);
  fecha[i].classList.add("fecha");

  imagen[i] = document.createElement("img");
  imagen[i].src = books[i].imageLink;
  cuadroLibro[i].appendChild(imagen[i]);
  imagen[i].classList.add("imagen");

  enlace[i] = document.createElement("a")
  enlace[i].href = books[i].link;
  enlace[i].appendChild(document.createTextNode("Ver en Wikipedia"))
  cuadroLibro[i].appendChild(enlace[i]);
  enlace[i].classList.add("enlace")


  pais[i] = document.createElement("p");
  pais[i].appendChild(document.createTextNode("Country: " +books[i].country));
  cuadroLibro[i].appendChild(pais[i]);
  pais[i].classList.add("pais");

  lengua[i] = document.createElement("p");
  lengua[i].appendChild(document.createTextNode("Languaje: " + books[i].language));
  cuadroLibro[i].appendChild(lengua[i]);
  lengua[i].classList.add("lengua");

  paginas[i] = document.createElement("p");
  paginas[i].appendChild(document.createTextNode("Pages: " + books[i].pages));
  cuadroLibro[i].appendChild(paginas[i]);
  paginas[i].classList.add("paginas");


}
*/

//MODELO 2
const lista = `<section class = "contenedor">
                  <article class = "libro">
                    <h3 class = "titulo">${books[0].title}</h3>
                    <h5 class = "autor">Author: ${books[0].author}</h5>
                    <p class = "fecha">Year: ${books[0].year}</p>
                    <img src =${books[0].imageLink} class = "imagen">
                    <a href =${books[0].link} class="enlace">Ver en Wikipedia</a>
                    <p class = "pais">Country: ${books[0].country}</p>
                    <p class = "lengua">Language: ${books[0].language}</p>
                    <p class = "paginas">Pages: ${books[0].pages}</p>
                  </article>
                  <article class = "libro">
                    <h3 class = "titulo">${books[1].title}</h3>
                    <h5 class = "autor">Author: ${books[1].author}</h5>
                    <p class = "fecha">Year: ${books[1].year}</p>
                    <img src =${books[1].imageLink} class = "imagen">
                    <a href =${books[1].link} class="enlace">Ver en Wikipedia</a>
                    <p class = "pais">Country: ${books[1].country}</p>
                    <p class = "lengua">Language: ${books[1].language}</p>
                    <p class = "paginas">Pages: ${books[1].pages}</p>
                  </article>
                  <article class = "libro">
                    <h3 class = "titulo">${books[2].title}</h3>
                    <h5 class = "autor">Author: ${books[2].author}</h5>
                    <p class = "fecha">Year: ${books[2].year}</p>
                    <img src =${books[2].imageLink} class = "imagen">
                    <a href =${books[2].link} class="enlace">Ver en Wikipedia</a>
                    <p class = "pais">Country: ${books[2].country}</p>
                    <p class = "lengua">Language: ${books[2].language}</p>
                    <p class = "paginas">Pages: ${books[2].pages}</p>
                  </article>
                  <article class = "libro">
                    <h3 class = "titulo">${books[3].title}</h3>
                    <h5 class = "autor">Author: ${books[3].author}</h5>
                    <p class = "fecha">Year: ${books[3].year}</p>
                    <img src =${books[3].imageLink} class = "imagen">
                    <a href =${books[3].link} class="enlace">Ver en Wikipedia</a>
                    <p class = "pais">Country: ${books[3].country}</p>
                    <p class = "lengua">Language: ${books[3].language}</p>
                    <p class = "paginas">Pages: ${books[3].pages}</p>
                  </article>
                  <article class = "libro">
                    <h3 class = "titulo">${books[4].title}</h3>
                    <h5 class = "autor">Author: ${books[4].author}</h5>
                    <p class = "fecha">Year: ${books[4].year}</p>
                    <img src =${books[4].imageLink} class = "imagen">
                    <a href =${books[4].link} class="enlace">Ver en Wikipedia</a>
                    <p class = "pais">Country: ${books[4].country}</p>
                    <p class = "lengua">Language: ${books[4].language}</p>
                    <p class = "paginas">Pages: ${books[4].pages}</p>
                  </article>
                </section>`;


//Modelo 1
//main.appendChild(contenedor) 


//MOdelo 2
main.innerHTML = lista;
document.body.appendChild(main);
