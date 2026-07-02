import db from "../config/firebase.js";

//nos permite crear coleccion, funcion de firestore, crea el documento, con productos semilla
import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

const productsSeeders = [
    {
        name: "Mouse Inalambrico Logitech M185",
        //para que los datos sean los mismos que espera product controller, 
        // aunque firestore permite la diferencia de campos
        //description: "Mouse compacto, comodo y de larga duracion de bateria.",
        price: 12.99,
        stock: 40,
    },
    {
        name: "Teclado Mecanico Redragon Kumara",
        //description: "Teclado mecanico tenkeyless con retroiluminacion roja.",
        price: 39.9,
        stock: 18,
    },
    {
        name: "Monitor Samsung 24 Pulgadas FHD",
        //description: "Pantalla IPS Full HD ideal para trabajo y estudio diario.",
        price: 149.99,
        stock: 12,
    },
    {
        name: "Audifonos Bluetooth JBL Tune 510BT",
        //description: "Audifonos inalambricos con buen sonido y bateria duradera.",
        price: 55,
        stock: 25,
    },
    {
        name: "Disco SSD Kingston 480GB",
        //description: "Unidad SSD para acelerar arranque y carga de aplicaciones.",
        price: 34.5,
        stock: 30,
    },
];

const createProducts = async () => {
    //dentro del try y catch para manejar el error cuando no crea el producto en bd
    //por falla en la conexión
    try {
        for (const product of productsSeeders) {
            const docRef = await addDoc(productsCollection, product);
            console.log("Producto creado con ID:", docRef.id);
        }

        console.log("Productos cargados correctamente");
        process.exit(0);
    } catch (error) {
        console.error("Error al cargar productos:");
        console.error(error.message);
        process.exit(1);
    }
};

createProducts();