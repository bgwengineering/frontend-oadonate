import React, {useState, useEffect} from 'react'
import  {AiOutlineFolderOpen} from "react-icons/ai"
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
import { addItem } from 'store/actions/cart/cart.actions';
import {useDispatch, useSelector} from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const ProductItem = () => {  
  const dispatch = useDispatch()
  const marketState = useSelector(state=>state.marketPlaceReducer)
  const {collections} = marketState
 
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0)
  
  const [BuyToSupportPage, setBuyToSupportPage] = useState(0)
  const [supportCardPerPage] = useState(8)

  const indexOfLastCard = BuyToSupportPage * supportCardPerPage
  const indexOfFirstCard = indexOfLastCard + supportCardPerPage

   const controlSingleOrMultipleItemClick = (num) => {
     if (num === 1){
       return "item added"
     }else{
       return "items added"
     }
   } 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
return (      
<> 
    {collections.length ? collections.slice(indexOfLastCard, indexOfFirstCard).map(itemValues => {
      console.log(collections);
      
   const {donate_item_img, donate_determine_price, donate_mkt_price, donate_item_name, donate_currency, id, donate_item_condition} = itemValues
   
   if(donate_determine_price || donate_mkt_price){
    return (
      <div className = "col-md-6 col-lg-3 my-3" key={id}>
      <div className = "card market-card">
      <div className = "img-container p-5">
      <Link to={`marketplace/products/${id}/details`}>
      <img src={donate_item_img} alt="product" className="card-img-top mb-3"/> 
      </Link>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
       <AiOutlineFolderOpen />
        <span className="card-text text-muted ml-1">
          {donate_item_condition}
        </span>
        </div>
        <Button className="card-text add_cart_btn" onClick={()=>{dispatch(addItem(itemValues)); setOpen(true);  setCount(count+1)}}>
          Add to Cart
        </Button>
      </div>
  
      {/*card footer */}
      <div className="card-footer d-flex justify-content-between">
      <p className="align-self-center mb-0">{donate_item_name}</p>
      <h5 className="text-blue font-italic mb-0">
      <span className="mr-1">{donate_currency}</span>
        {donate_mkt_price}
      </h5>
      </div>
      </div>
      </div>
     )
   }

 }) :  <h4 className='text-center'>no available item for sale</h4>}  
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={count + " " + controlSingleOrMultipleItemClick(count)} 
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
</>
)
};
export default ProductItem

