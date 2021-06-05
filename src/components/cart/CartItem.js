import React from 'react'
var numeral = require('numeral')

 const CartItem = ({item}) => {
     const { donate_item_img, donate_mkt_price, donate_item_name, quantity, donate_currency } = item
     const marketPrice = numeral(donate_mkt_price).format('0,0');
    return (
        <div className='cart-item'>
            <img src = {donate_item_img} alt='item' />
          <div className = 'item-details'>
              <span className='name'>{donate_item_name}</span>
              <span className='price'>
                    {quantity} * {donate_currency}{marketPrice}
              </span>
          </div>
        </div>
    )
}

export default CartItem