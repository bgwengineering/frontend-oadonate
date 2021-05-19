import React from 'react'

 const CartItem = ({item}) => {
    const {donate_item_img, donate_mkt_price, donate_item_name, quantity, donate_currency} = item
    return (
        <div className='cart-item'>
            <img src = {donate_item_img} alt='item' />
          <div className = 'item-details'>
              <span className='name'>{donate_item_name}</span>
              <span className='price'>
                    {quantity} * {donate_currency}{donate_mkt_price}
              </span>
          </div>
        </div>
    )
}

export default CartItem