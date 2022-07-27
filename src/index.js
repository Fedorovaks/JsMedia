import Header from './header'
import Catalog from './catalog'
import Product from './product'
import Cart from './cart'
import Basket from './basket'

import './index.scss'

const mocks =[{
        "id": 1,
        "sku":123,
        "image": "pictures/product/1.jpg",
        "name": "Панкейк",
        "oldPrice": 700,
        "sale": 30
    },
    {
        "id": 2,
        "sku":456,
        "image": "pictures/product/2.jpg",
        "name": "Шоколадный кекс",
        "oldPrice": 1000,
        "sale": 10
    },
    {
        "id": 3,
        "sku":789,
        "image": "pictures/product/3.jpg",
        "name": "Десерт «Красный бархат» ",
        "oldPrice": 1400,
        "sale": 15
    },
    {
        "id": 4,
        "sku":102,
        "image": "pictures/product/4.jpg",
        "name": "Десерт «Сырный»",
        "oldPrice": 1500,
        "sale": 5
    },
    {
        "id": 5,
        "sku":462,
        "image": "pictures/product/5.jpg",
        "name": "Макаруны",
        "oldPrice": 1100,
        "sale": 7
    },
    {
        "id": 6,
        "sku":835,
        "image": "pictures/product/6.jpg",
        "name": "Десерт «Рафаэлло»",
        "oldPrice": 1800,
        "sale": 18
    },
    {
        "id": 7,
        "sku":960,
        "image": "pictures/product/7.jpg",
        "name": "Десерт фруктовый",
        "oldPrice": 800,
        "sale": 5
    },
    {
        "id": 8,
        "sku":1116,
        "image": "pictures/product/8.jpg",
        "name": "Круасан «Миндальный»",
        "oldPrice": 200,
        "sale": 0
    }
    ]

let cart = [ ]

const header = Header();
document.body.appendChild(header);


const btnCart = ()=>{
    const popUp = document.querySelector('.pop-up-cart ')
    popUp.classList.add("expand");
}

const {PopUpCart, updateCartProduct} = Basket();
document.body.appendChild(PopUpCart); 

const {CartMini, updateCart} = Cart(cart, btnCart);
header.appendChild(CartMini);

const сatalog = Catalog();
document.body.appendChild(сatalog);

const generateProducts = () => {
    mocks.forEach((item) => {

        const btnAdd = () => {
            cart.push(item);
            updateCart(cart);
            updateCartProduct(item);
      
            
        } 

        

        const products = Product(item.name, 
            item.image, 
            item.sku,  
            item.oldPrice, 
            item.sale, 
            btnAdd);
            
        сatalog.appendChild(products)
       
        
})
}
generateProducts();


