import "./ProductFormContainer.css";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { ProductFormUI } from "./ProductFormUI";
import { validateProducts } from "../../utils/validateProducts";
import { uploadImage } from "../../services/uploadImages";
import { createProduct } from "../../services/productsServices";

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});
        setLoading(true);

        const newError = validateProducts({...product, file});
        if (Object.keys(newError).length > 0) {
            setError(newError);
            setLoading(false);
            return;
        }

        try {
            const imageUrl = await uploadImage(file);
            const productData = {
                ...product,
                price: Number(product.price),
                image: imageUrl
            };

            const id = await createProduct(productData);

            setProduct({
                name: "",
                price: "",
                description: "",
            });
            setFile(null);
            navigate(`/success/${id}`, {replace: true});


        }catch(error){
            setError({general: error.message});
        }finally{
            setLoading(false);
        }


    };

    return(
        <ProductFormUI 
        product={product}
        errors={error}
        loading={loading}
        onChange={handleChange}
        onFileChange={handleFileChange}
        onSubmit={handleSubmit}
        />
    );
};