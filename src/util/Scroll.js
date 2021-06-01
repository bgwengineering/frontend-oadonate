import React, { useState, useEffect } from "react";
import { TiArrowUpOutline } from 'react-icons/ti'



const Scroll = () => {
    useEffect(() => {
        handleScroll();
    }, []);

    const [showScroll, setShowScroll] = useState(false);

    const handleScroll = () => {
        document.addEventListener("scroll", toggleVisibilty);
    };

    const toggleVisibilty = () => {
        if (window.pageYOffset > 35) {
            setShowScroll(!showScroll);
        } else {
            setShowScroll(showScroll);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return ( 
        <>
        {
        showScroll && (
        <div className="font-bg" onClick={() => scrollToTop()}>
          <TiArrowUpOutline color='#C75A00' className='fs-3' />
        </div>
        )
        }
    </>
    );
};

export default Scroll;