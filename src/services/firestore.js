// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPEBj9U04F3U0tICvroz15kM0MG9ij-BA",
  authDomain: "reactsoftwarecommerce.firebaseapp.com",
  projectId: "reactsoftwarecommerce",
  storageBucket: "reactsoftwarecommerce.appspot.com",
  messagingSenderId: "1096901466048",
  appId: "1:1096901466048:web:df956a14ed059577881a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems(){
    const miColeccion = collection(firestore, "productos");
    let snapshotDB = await getDocs(miColeccion);

    let dataDocs = snapshotDB.docs.map(documento => {
        let docFormateado = {...documento.data(), id:documento.id}
        return docFormateado;
    });
    return dataDocs;
}

export async function getSingleElement(idUnico){
    try{
        const docRef = doc(firestore, "productos", idUnico);
        const docSnap = await getDoc(docRef);
        return {...docSnap.data(), id: docSnap.id}
    }catch (error){
        console.error(error);
    }
}

export async function getItemsByCategory(cat){
    const miColeccion = collection(firestore, "productos");
    const queryCategory = query(miColeccion, where("categoria", "==", cat));

    const respuesta = await getDocs(queryCategory);

    let dataDocs = respuesta.docs.map(documento => {
        let docFormateado = {...documento.data(), id:documento.id}
        return docFormateado;
    });
    return dataDocs;
}

export async function createBuyOrder(orderData){
    // console.log(orderData);
    const collectionRef = collection(firestore, "orders");
    let respuesta = await addDoc(collectionRef, orderData);
    return(respuesta.id);
}

/*Otra forma de cargar los productos utilizando como molde mi MockApi*/
export async function exportDataToFirestore(){
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

    const collectionRef = collection(firestore, "replicaAlquileres");

    for (let item of data){
        const newDoc = await addDoc(collectionRef, item);
    }
}



// export default app;
export default firestore;