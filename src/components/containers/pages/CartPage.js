import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutItem from 'components/cart/CheckoutItem'
import {useSelector} from 'react-redux'

const CartPage = () => {  
const cartItemState = useSelector(state=>state.cartReducer)
const {cartItems} = cartItemState

 const total = cartItems.reduce((accumulatedQuantity, cartItem)=>accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
    
 return (
    <div className='checkout-page'>
        <div className='checkout-header'>
          <div className='header-block'>
              <span>Product</span>
          </div>
          <div className='header-block'>
              <span>Description</span>
          </div>
          
          <div className='header-block'>
              <span>Quantity</span>
          </div>
          <div className='header-block'>
              <span>Price</span>
          </div>
          <div className='header-block'>
              <span>Sub Total</span>
          </div>
          <div className='header-block'>
              <span></span>
          </div> 
        </div>
         {
            cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          )
         }
         <div className='total'>
             <span>TOTAL: ${total}</span>
         </div>
         <button className='cart-paybtn text-uppercase'><Link to='/checkout'>Checkout</Link></button>
    </div>
)
}


export default CartPage;