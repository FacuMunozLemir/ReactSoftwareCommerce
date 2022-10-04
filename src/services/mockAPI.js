import { ErrorResponse } from "@remix-run/router";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

const data = [
  {
    id: 1,
    nombre: "Mi consultorio - Windows",
    stock: "5",
    categoria: "windows",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 55000,
    img: "/assets/img/consultorio.jpg", //Siempre con la / primero --> busque en public
  },
  {
    id: 2,
    nombre: "Mi cochera - Windows",
    stock: "4",
    categoria: "windows",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 25000,
    img: "/assets/img/cochera.jpg",
  },
  {
    id: 3,
    nombre: "Mi restaruante - Windows",
    stock: "3",
    categoria: "windows",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 40000,
    img: "/assets/img/restaurante.jpg",
  },
  {
    id: 4,
    nombre: "Mi Bar - Android",
    stock: "5",
    categoria: "android",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 22000,
    img: "/assets/img/bar.jpg",
  },
  {
    id: 5,
    nombre: "Mi Restaurante - Android",
    stock: "5",
    categoria: "android",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 250000,
    img: "/assets/img/restaurante.jpg",
  },
  {
    id: 6,
    nombre: "Mi Cochera - Android",
    stock: "3",
    categoria: "android",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
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
