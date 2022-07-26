import './cart.scss'


const Cart = (cart, btnCart) => {

    const CartMini = document.createElement('div');
    CartMini.className = 'cart-mini';

    const CartMiniMain = document.createElement('a');
    CartMiniMain.className = 'cart-mini-main';
    // CartMiniMain.href = '/cart';
    CartMiniMain.addEventListener('click', btnCart)

    const CartMiniIcon = document.createElement('i');
    CartMiniIcon.className = 'fa fa-shopping-cart';
    CartMiniIcon.ariaHidden = 'true'
    
    const CartMiniCount = document.createElement('span');
    CartMiniCount.className = 'cart-mini-count';
    CartMiniCount.innerText = cart.length;

    const CartMiniText = document.createElement('span');
    CartMiniText.className = 'cart-mini-text';
    CartMiniText.innerText = 'Корзина';
   
    CartMini.appendChild(CartMiniMain);

    CartMiniMain.appendChild(CartMiniIcon);
    CartMiniMain.appendChild(CartMiniCount);
    CartMiniMain.appendChild(CartMiniText);

    const updateCart = (cart) => {
        CartMiniCount.innerText = cart.length;
    }

    return {CartMini, updateCart}

}

export default Cart