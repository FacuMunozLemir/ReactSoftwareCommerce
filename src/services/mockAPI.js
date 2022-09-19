import { getActiveElement } from "@testing-library/user-event/dist/utils";

const data = [
  {
    id: 1,
    nombre: "Mi consultorio - Windows",
    stock: "5",
    categoria: "Windows",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 55000,
    img: "/assets/img/1.png", //Siempre con la / primero --> busque en public
  },
  {
    id: 2,
    nombre: "Mi cochera - Windows",
    stock: "4",
    categoria: "Windows",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 25000,
    img: "/assets/img/1.png",
  },
  {
    id: 3,
    nombre: "Mi restaruante - Windows",
    stock: "3",
    categoria: "Windows",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 40000,
    img: "/assets/img/1.png",
  },
  {
    id: 4,
    nombre: "Mi Bar - Android",
    stock: "5",
    categoria: "android",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 22000,
    img: "/assets/img/1.png",
  },
  {
    id: 5,
    nombre: "Mi Restaurante - Android",
    stock: "5",
    categoria: "android",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 250000,
    img: "/assets/img/1.png",
  },
  {
    id: 6,
    nombre: "Mi Cochera - Android",
    stock: "3",
    categoria: "android",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vestibulum posuere. Vivamus lacinia molestie magna a dignissim.",
    precio: 15000,
    img: "/assets/img/1.png",
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
