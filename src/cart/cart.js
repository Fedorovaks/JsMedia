import './cart.scss'

const Cart = (cart) => {
    const CartCount = cart.length;

    const UpdateCartCount = (newCart) =>
    CartCount = newCart.length;

    return {CartCount, UpdateCartCount}

}

export default Cart