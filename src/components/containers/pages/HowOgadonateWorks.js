import React from 'react'
import donationVideo from "assets/videos/Donation.mp4";

const HowOgadonateWorks = () => {   
    return (
        <div>
            <div className='d-flex flex-row flex-column justify-content-center w-50 mx-auto mt-5'>
            <h4>This Instructional video will guide you on Cause Donation</h4>
            <video width="320" height="240" controls>
                <source src={donationVideo} type="video/MP4"/>
               </video> 
            </div>
        </div>
    )
}

export default HowOgadonateWorks
