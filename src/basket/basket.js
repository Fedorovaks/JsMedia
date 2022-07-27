import './basket.scss'

const Basket = () => {

    const PopUpCart = document.createElement ('div');
    PopUpCart.className = 'pop-up-cart';

    const CloseCart = document.createElement ('a');
    CloseCart.href = '#';
    CloseCart.className = 'close-cart';
    CloseCart.innerText = 'X';

    const h1Cart = document.createElement ('h1');
    h1Cart.innerText = 'Корзина';

    
    

    PopUpCart.appendChild(CloseCart);
    PopUpCart.appendChild(h1Cart);
    

    CloseCart.addEventListener("click", function (evt) {
        evt.preventDefault();
        PopUpCart.classList.remove("expand");
    });

   let CartProduct = [ ]

    //const itemsArray = new Array();

    const updateCartProduct = (item) => {
        CartProduct.push(item)

        const NameCart = document.createElement ('div');
        NameCart.innerText = item.name;
        NameCart.dataset.id = item.id

        if(CartProduct.contai)
        PopUpCart.appendChild(NameCart);

        
   }

    return {PopUpCart, updateCartProduct}
   
}
export default Basket