import { ErrorResponse } from "@remix-run/router";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

const data = [
  {
    id: 1,
    nombre: "Mi consultorio - Windows",
    stock: 5,
    categoria: "windows",
    descripcion:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
    precio: 55000,
    img: "/assets/img/consultorio.jpg", //Siempre con la / primero --> busque en public
  },
  {
    id: 2,
    nombre: "Mi cochera - Windows",
    stock: 4,
    categoria: "windows",
    descripcion:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control de la entrada/salida de los vehículos en una 'cochera' o 'parking' ",
    precio: 25000,
    img: "/assets/img/cochera.jpg",
  },
  {
    id: 3,
    nombre: "Mi restaruante - Windows",
    stock: 3,
    categoria: "windows",
    descripcion:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control de las ventas, mesas y comandas de tu restaurante",
    precio: 40000,
    img: "/assets/img/restaurante.jpg",
  },
  {
    id: 4,
    nombre: "Mi Bar - Android",
    stock: 5,
    categoria: "android",
    descripcion:
      "Programa para dispositivos con SO Android principalmente pensado para llevar el control de las ventas, mesas y comandas de tu Bar",
    precio: 22000,
    img: "/assets/img/bar.jpg",
  },
  {
    id: 5,
    nombre: "Mi Restaurante - Android",
    stock: 5,
    categoria: "android",
    descripcion:
      "Programa para dispositivos con SO Android principalmente pensado para llevar el control de las ventas, mesas y comandas de tu restaurante",
    precio: 25000,
    img: "/assets/img/restaurante.jpg",
  },
  {
    id: 6,
    nombre: "Mi Cochera - Android",
    stock: 3,
    categoria: "android",
    descripcion:
      "Programa para dispositivos con SO Android principalmente pensado para llevar el control de la entrada/salida de los vehículos en una 'cochera' o 'parking' ",
    precio: 15000,
    img: "/assets/img/cochera.jpg",
  },
];

//Obtenemos todos los elementos
export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}

//Obtenemos los elementos filtrados por categoría
export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {
    let itemFind = data.filter((item) => {
      return item.categoria == cat;
    });

    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 500);
  });
}

//Obtenemos un elemento filtrado por id
export function getSingleElement(idUnico) {
  return new Promise((resolve, reject) => {
    let itemFind = data.find((item) => {
      return item.id == idUnico;
    });

    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 500);
  });
}
