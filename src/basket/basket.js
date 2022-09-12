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

    const ContentCart = document.createElement ('div');
    ContentCart.className = 'content';

    PopUpCart.appendChild(CloseCart);
    PopUpCart.appendChild(h1Cart);
    PopUpCart.appendChild(ContentCart);
    

    CloseCart.addEventListener("click", function (evt) {
        evt.preventDefault();
        PopUpCart.classList.remove("expand");
    });

   
//    let CartProduct = [ ]


    const updateCartProduct = (item) => {
    //    CartProduct.push(item);

        const NameCart = document.createElement ('div');
        NameCart.innerText = item.name;
        NameCart.dataset.id = item.id;
        NameCart.className = 'product-name-cart';

        const CountCart = document.createElement ('div');
        CountCart.innerText = 'Количество: ' + item.count;
        CountCart.className = 'product-count-cart';

        const PriceCart = document.createElement ('div');
        PriceCart.innerText = 'Цена: ' + (item.oldPrice * (100-item.sale)/100) * item.count + ' руб.'
        PriceCart.className = 'product-price-cart';

        ContentCart.appendChild(NameCart);
        ContentCart.appendChild(PriceCart);
        ContentCart.appendChild(CountCart);
                
   }


    return {PopUpCart, updateCartProduct}
    
   
}
export default Basket