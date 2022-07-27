
import './product.scss'


const Product = (name, image, sku, oldPrice, sale, btnAdd) => {
    const ProductsViewItem = document.createElement('div');
    ProductsViewItem.className = 'products-view-item';
    // ProductsViewItem.addEventListener('click');

   const ProductName = document.createElement('div');
   ProductName.className = 'name';
   ProductName.innerText = name;

   const ProductImg = document.createElement('img');
   ProductImg.src = image;
   ProductImg.className = 'product-image';
   

   const ProductSku = document.createElement('div');
   ProductSku.className = 'sku';
   ProductSku.innerText = 'Артикул: ' + sku;

   const ProductVievPrice = document.createElement('div');
   ProductVievPrice.className = 'products-view-price';

   const ProductPrice = document.createElement('div');
   ProductPrice.className = 'price';
   const price = oldPrice * (100-sale)/100;
   ProductPrice.innerText = price+' руб.';

   const ProductOldPrice = document.createElement('div');
   ProductOldPrice.className = 'oldPrice';
   ProductOldPrice.innerText = oldPrice + ' руб.';

   const ProductBtn = document.createElement('a');
   ProductBtn.className = 'products-view-buttons';
   ProductBtn.innerText = 'Добавить';
   ProductBtn.addEventListener('click',btnAdd)
//    ProductBtn.href = '/product/'+ sku;

   const ProductSale = document.createElement('div')
   ProductSale.className = 'sale';
   ProductSale.innerText = sale + ' %'

   const Markers = document.createElement('img');
   Markers.src = '/pictures/sale.png';
   Markers.className = 'marker';


   ProductsViewItem.appendChild(ProductName);
   ProductsViewItem.appendChild(ProductImg);
   ProductsViewItem.appendChild(ProductSku);
   ProductsViewItem.appendChild(ProductVievPrice);
   ProductVievPrice.appendChild(ProductPrice);
   ProductVievPrice.appendChild(ProductOldPrice);
   ProductsViewItem.appendChild(ProductBtn);
   ProductsViewItem.appendChild(Markers);
   ProductsViewItem.appendChild(ProductSale);

   if(sale ==0) {
    ProductSale.className = 'sale_none';
    Markers.className = 'marker_none';
    ProductOldPrice.className = 'oldPrice_none';
    // ProductSale.style.display = 'none';
    // Markers.style.display = 'none';
    // ProductOldPrice.style.display = 'none';
    }
  

    return ProductsViewItem
}

export default Product