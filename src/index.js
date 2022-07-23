import Catalog from './catalog'
import Product from './product'



import './index.scss'


const mocks =[{
        "id": 1,
        "sku":123,
        "image": "pictures/product/1.jpg",
        "name": "Панкейк",
        "oldPrice": 700,
        // "price": 490,
        "sale": 30
    },
    {
        "id": 2,
        "sku":456,
        "image": "pictures/product/2.jpg",
        "name": "Шоколадный кекс",
        "oldPrice": 1000,
        // "price": 900,
        "sale": 10
    },
    {
        "id": 3,
        "sku":789,
        "image": "pictures/product/3.jpg",
        "name": "Десерт «Красный бархат» ",
        "oldPrice": 1400,
        // "price": 1190,
        "sale": 15
    },
    {
        "id": 4,
        "sku":102,
        "image": "pictures/product/4.jpg",
        "name": "Десерт «Сырный»",
        "oldPrice": 1500,
        // "price": 1425,
        "sale": 5
    }
    ]

const сatalog = Catalog();
document.body.appendChild(сatalog)

const generateProducts = () => {
    mocks.forEach((item)=>{
        const products = Product(item.name, item.image, item.sku, item.price, 
            item.oldPrice, item.sale);
        сatalog.appendChild(products)
        
})
}
generateProducts()