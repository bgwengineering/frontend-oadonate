import React from 'react'
import { withRouter } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { toggleCartHidden, cartHidden } from '../../store/actions/cart/cart.actions'
import { Button } from '@material-ui/core'
import CartItem from './CartItem'



 const CartDropdown = ({history}) => { 
 const dispatch = useDispatch()
   const cartState = useSelector(state=>state.cartReducer)

   const {cartItems} = cartState
    // const cartItemsMap = 
    // cartItems.length ? (
    //    cartItems.map(cartItem =>  
    //     {
    //     const {id} = cartItem      
    //     return( 
    //      <CartItem key={id} item={cartItem}/>
    //    )  
    //     }
    //    )):(<span className='empty-message'>Your Cart is empty</span>)
        
     return (
         <div className="cart-dropdown">
           {/* <div className="cart-items">{cartItemsMap}</div> */}
           <div className="d-flex flex-column justify-content-center align-items-center mt-4">
             <Button
               onClick={() => {
                 window.scrollTo({
                   top: 0,
                   behaviour:'smooth'
                 }, history.push("/cart"))                
                 dispatch(toggleCartHidden());
               }}
               className="add_cart_btn"
                >
               GO TO CART
             </Button>
           </div>
         </div>
     );
}



export default withRouter(CartDropdown);