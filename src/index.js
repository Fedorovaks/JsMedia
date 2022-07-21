import Catalog from './catalog'
import Product from './product'

import './index.scss'

const mocks =[{
        "id": 1,
        "sku":123,
        "image": "",
        "name": "Платье футляр",
        "oldPrice": 1000,
        "price": 900,
        "sale": 100
    },
    {
        "id": 2,
        "sku":456,
        "image": "",
        "name": "Платье приталенное",
        "oldPrice": 1000,
        "price": 900,
        "sale": 100
    },
    {
        "id": 3,
        "sku":789,
        "image": "",
        "name": "Вечернее платье",
        "oldPrice": 1000,
        "price": 900,
        "sale": 100
    },
    {
        "id": 4,
        "sku":102,
        "image": "",
        "name": "Свадебное платье",
        "oldPrice": 1000,
        "price": 900,
        "sale": 100
    }]

const сatalog = Catalog();
document.body.appendChild(сatalog)

const generateProducts = () => {
    mocks.forEach((item)=>{
        const products = Product(item.name, item.price);
        сatalog.appendChild(products)
        
})
}
generateProducts()