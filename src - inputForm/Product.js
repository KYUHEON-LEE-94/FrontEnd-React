import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

export default function Product() {
    const [showProduct, setshowProduct] = useState(true);
  return (
    <div>
        {/* &&은 False인게 실행 */}
        {showProduct || <ProductList/>}
      <button onClick={()=> setshowProduct(show => !show)}>Toggle</button>
    </div>
  )
}
