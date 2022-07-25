
import './header.scss'

const Header = (cart) => {
    const SiteHead = document.createElement('header');
    SiteHead.className = 'site-head';

    const Logo = document.createElement('img');
    Logo.src = 'pictures/logo.png';

    const CartMini = document.createElement('div');
    CartMini.className = 'cart-mini';

    const CartMiniMain = document.createElement('a');
    CartMiniMain.className = 'cart-mini-main';
    CartMiniMain.href = '/cart';

    const CartMiniIcon = document.createElement('i');
    CartMiniIcon.className = 'fa fa-shopping-cart';
    CartMiniIcon.ariaHidden = 'true'
    
    const CartMiniCount = document.createElement('span');
    CartMiniCount.className = 'cart-mini-count';
    CartMiniCount.innerText = cart.length;

    const CartMiniText = document.createElement('span');
    CartMiniText.className = 'cart-mini-text';
    CartMiniText.innerText = 'Корзина';

    SiteHead.appendChild(Logo);
    SiteHead.appendChild(CartMini);

    CartMini.appendChild(CartMiniMain);

    CartMiniMain.appendChild(CartMiniIcon);
    CartMiniMain.appendChild(CartMiniCount);
    CartMiniMain.appendChild(CartMiniText);

    return SiteHead
}

export default Header