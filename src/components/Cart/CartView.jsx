import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Cart.css";

export const CartView = () => {
    const {cart} = useCart();

    return (
        <section className="cart-container">
            <h1>Tu carrito</h1>

            {cart.length ? (
                <> 
                    <CartList /> 
                    <CartSummary /> 
                </> 
            ) : (
                <>
                <p className="empty-cart">Tu carrito está vacío</p>
                <Link to={"/"} className="btn primary bg-primary">
                    Volver 
                </Link>
                </>
            )}            
        </section>
    );

};
