import { collection, addDoc, getDocs, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

export const getProducts = async (product) => {
    try {
        const snapshot = await getDocs(productsRef);
        
        const productsFormat= snapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        });

        return productsFormat;

    } catch(error) {
        console.error("Error al traer productos: ", error);
        return [];
    }
};

export const createProduct = async (productData) => {
    try{
        const docRef = await addDoc(productsRef, productData); 
        return docRef.id;


    }catch(error){
        console.error("Error al crear producto: ", error);
        throw error;
    }
};

