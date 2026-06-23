import { useCart } from "../../context/cartContext";
import {Item} from "../Item/Item";

export const CartItem = ({item}) => {
     const {removeItem} = useCart ();
    
    return( 
        <div className="cart-item">
            <Item {...item}>
                <button className="btn bg-delete primary"
                onClick={() => removeItem(item.id)}
                >
                    Eliminar
                </button>
            </Item>
        </div>
    );
};