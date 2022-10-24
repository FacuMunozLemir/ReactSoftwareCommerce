// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
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

// export default app;
export default firestore;