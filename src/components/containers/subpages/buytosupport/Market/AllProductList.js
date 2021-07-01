import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ProductItem from "../Market/ProductItem";


const AllProductList = () => {
    const marketState = useSelector(state => state.marketPlaceReducer);
    const { collections } = marketState;
    const [BuyToSupportPage, setBuyToSupportPage] = useState(0);
    const [supportCardPerPage] = useState(4);

    const indexOfLastCard = BuyToSupportPage * supportCardPerPage;
    const indexOfFirstCard = indexOfLastCard + supportCardPerPage;
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);

    const controlSingleOrMultipleItemClick = num => {
        if (num === 1) {
            return "item added";
        } else {
            return "items added";
        }
    };
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    let productItem = collections.length ? (
            collections.length &&
            collections.map((product, indx) => {
            if (product.donate_determine_price || product.donate_mkt_price) {
            return (
                <ProductItem
                    product={product}
                    indx={indx}
                    controlSingleOrMultipleItemClick={
                        controlSingleOrMultipleItemClick
                    }
                />
            );
            }
        })
    ) : (
        <div>No product available</div>
        )

    return (
        <>
            {productItem}
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message={count + " " + controlSingleOrMultipleItemClick(count)}
                action={
                    <React.Fragment>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </>
    );
};
export default AllProductList;
