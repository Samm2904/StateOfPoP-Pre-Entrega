import { useParams } from "react-router-dom";
import { useEffect, useState  } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsServices";

export const ItemDetailContainer = () => {
   const{id} = useParams();
   
   const [itemDetail, setItemDetail] = useState(null);
   const [loading, setLoading] = useState(true);
   
   
   useEffect(() => {
    console.log("ID recibido:", id);
    getProductById(id)
      .then((data) => setItemDetail(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1>Detalles del producto</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};