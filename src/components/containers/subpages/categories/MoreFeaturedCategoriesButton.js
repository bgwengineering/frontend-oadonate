import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { FaArrowRight} from 'react-icons/fa'
import  Button  from '@material-ui/core/Button';

const MoreFeaturedCategoriesButton = ({history}) => {
    return (
        <div className="more-market-support">
            <Link className="link-router">
                <Button
                    className="text-capitalize market-place-btn mt--10"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }, history.push("/categories"))
                    }
                >
                    More <FaArrowRight style={{ color: "#fff", marginLeft: "10px" }} />
                </Button>
            </Link>
        </div>
    )
}

export default withRouter(MoreFeaturedCategoriesButton)
