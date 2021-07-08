import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import { FaArrowRight} from 'react-icons/fa'
import  Button  from '@material-ui/core/Button';
import { FUNDRAISECATEGORIES } from 'store/actions/Category';
import {useDispatch} from 'react-redux'



const MoreFeaturedCategoriesButton = ({history}) => {
    const dispatch = useDispatch()
    return (
        <div className="more-market-support">
            <Button
                exact
                className="text-capitalize market-place-btn mt--10"
                onClick={() => {
                    dispatch(FUNDRAISECATEGORIES());
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    }, history.push("/categories"))
                    }}
                  >
                    More <FaArrowRight style={{ color: "#fff", marginLeft: "10px" }} />
                </Button>    
        </div>
    )
}

export default withRouter(MoreFeaturedCategoriesButton)
