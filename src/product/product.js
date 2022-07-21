
import './product.scss'

const Product = (name, price) => {
    const ProductsViewItem = document.createElement('div');
    ProductsViewItem.className = 'products-view-item';

   const ProductName = document.createElement('div');
   ProductName.className = 'name';
   ProductName.innerText = name


   const ProductPrice = document.createElement('div');
   ProductPrice.className = 'price';
   ProductPrice.innerText = price+' руб.'

   ProductsViewItem.appendChild(ProductName)
   ProductsViewItem.appendChild(ProductPrice)


    return ProductsViewItem
}

export default Product