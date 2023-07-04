document.addEventListener("DOMContentLoaded", _mostrarProductos);

const productos = [
  {
    nombre: "Tablet Samsung A8",
    descripcion: "Tablet de 10 pulgadas color gris",
    precio: 23000,
    img: "p1.jpg",
  },
  {
    nombre: "Notebook UNAHUR",
    descripcion: "Notebook con i3 - 8GB - 250GB SSD - ASUS",
    precio: 200000,
    img: "p2.jpg",
  },
  {
    nombre: "Termos UNAHUR",
    descripcion: "Agua caliente por 48hs",
    precio: 5000,
    img: "p3.jpg",
  },
  {
    nombre: "Pelota AFA",
    descripcion: "La pelota del campeón del mundo",
    precio: 15000,
    img: "p4.jpg",
  },
  {
    nombre: "Campera Moto",
    descripcion: "Ideal para lluvia",
    precio: 5000,
    img: "p5.jpg",
  },
  {
    nombre: "Mate UNAHUR",
    descripcion: "El mejor mate del mundo",
    precio: 500,
    img: "p6.jpg",
  },
];

function _mostrarProductos() {
  const prodsContainer = document.getElementById("productos-container");
  prodsContainer.innerHTML = _crearProductos();
}

function _crearProductos() {
  return productos.reduce((productos, prod) => 
      productos +
      `<div class="producto-item">
            <h2>${prod.nombre}</h2>
            <img class="prod-img" src="./img/productos/${prod.img}" alt="${prod.nombre}">
            <p>${prod.descripcion}</p>
            <p>Precio: $ ${prod.precio}</p>
        </div>`
    , "");
}
