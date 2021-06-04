import React from 'react'
import {useSelector} from 'react-redux'
import ProductItem from './ProductItem'



const ProductList = () => {
 const marketState = useSelector(state=>state.marketPlaceReducer)
  const {collections} = marketState
let productItem = collections.length && collections.map((product, indx)=>{
    return <ProductItem product={product} indx={indx}/>
})
    return (
        <>
        {collections.length ? <div>{productItem}</div> : <div>No product available</div>}
        </>
    )
}

export default ProductList
