import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
    const calculetTotasl = (items: CartItemType[]) => 
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0).toFixed(2);
    return (
        <Wrapper>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? <p>Cart is empty.</p>: null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <div className="total-div">
                <h2>Total: ${calculetTotasl(cartItems)}</h2>
            </div>
        </Wrapper>
    )
}

export default Cart;