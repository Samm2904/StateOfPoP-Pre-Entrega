import { Item } from "../Item/Item";
import { useCart } from "../../context/cartContext";

export const ItemDetail = ({item}) => {
    const {addItem} = useCart();


    return (
        <Item {...item}>
            <button className="btn primary" onClick={() => addItem(item)}>Agregar al carrito </button>
        </Item>
    );
};