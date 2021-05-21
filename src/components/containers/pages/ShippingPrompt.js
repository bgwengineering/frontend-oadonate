import React,{useSelector} from 'react'
import NewShipping from '../../checkout/NewShipping'
import EditShipping from '../../checkout/EditShipping'

export const ShippingPrompt = ({nextPage,previousPage,id}) => {
    return (
        <>
             {id? <EditShipping
            nextPage={nextPage}
            previousPage={previousPage}
            id={id}
          />
          :
          <NewShipping
            nextPage={nextPage}
            previousPage={previousPage}
            id={id}
          />}
        </>
    )
}
export default ShippingPrompt;