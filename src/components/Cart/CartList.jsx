import { useCart } from "../../context/cartContext";
import {CartItem} from "./CartItem";

export const CartList = () => {
   const {cart, removeItem} = useCart (); 

   return (
    <>
       <div className="cart-list">
        {cart.map(element => (
            <CartItem key={element.id} item={element}/>
            ))}
       </div>
    </>
   );
};