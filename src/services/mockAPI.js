import { getActiveElement } from "@testing-library/user-event/dist/utils";

const data = [
  {
    id: 1,
    nombre: "Mi consultorio - Windows",
    stock: "5",
    categoria: "Windows",
    descripcion: "Descripcion",
    img: "/assets/img/1.png", //Siempre con la / primero --> busque en public
  },
  {
    id: 2,
    nombre: "Mi cochera - Windows",
    stock: "4",
    categoria: "Windows",
    descripcion: "Descripcion",
  },
  {
    id: 3,
    nombre: "Mi restaruante - Windows",
    stock: "3",
    categoria: "Windows",
    descripcion: "Descripcion",
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}
