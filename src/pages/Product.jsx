import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';
import { BreadCrums } from '../components/BreadCrums/BreadCrums';

 const Product = () => {
  const {all_product} =useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <BreadCrums product = {product}/>
      <DescriptionBox/>
      <RelatedProducts/>
      <ProductDisplay product = {product}/>
    </div>
  )
}
export default Product
