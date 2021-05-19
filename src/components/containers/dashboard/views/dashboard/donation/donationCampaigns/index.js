import React from 'react'
import DonateCash from 'components/containers/subpages/Donate/DonateCash'
import { Button } from '@material-ui/core'

// import DonateItem from 'components/containers/subpages/Donate/DonateItem'

const Cash = () => {
  return (
    <div className='mb-5'>
    <DonateCash />
    {/* <DonateItem /> */}
    <Button className='market-place-btn'>
      see more
    </Button>
    </div>
  )
}

export default Cash
