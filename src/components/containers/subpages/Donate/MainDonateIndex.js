import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DonateCash from './DonateCash'
import DonateItem from './DonateItem'
import AllCauses from './AllCauses'
import DonateOga from './DonateOga'

const MainDonateIndex = ({match}) => {
    return (
        <>
          <Switch>
              <Route path={`${match.path}/cash`} component={DonateCash}/>
              <Route path={`${match.path}/item`} component={DonateItem}/>
              <Route path={`${match.path}/all`} component={AllCauses}/>
              <Route path={`${match.path}/ogadonate`} component={DonateOga}/>
          </Switch>
        </>
    )
}

export default MainDonateIndex
