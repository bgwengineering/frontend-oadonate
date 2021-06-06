import React from 'react'

const EyeIndicator = () => {
    return (
        <div className='border border-primary'>
            <div>
                <div className="center square1"></div>
                <div className="center square3"></div>
                <div className="center square4"></div>         
            </div>
            <div id="eye">         
                <div className="center-back light">
                    <div className="globe-intern">
                        <div id="stone"></div>
                        <div className="eyelid top"></div>
                        <div className="eyelid bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EyeIndicator
