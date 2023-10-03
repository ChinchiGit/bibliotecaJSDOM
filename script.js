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

main.appendChild(contenedor)
document.body.appendChild(main);
