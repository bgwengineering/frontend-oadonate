import React from 'react'

const SearchSvg = () => {
    return (
        <div>
            <svg width="80%">
                <circle
                  id="circle-mask"
                  className="field-circle"
                  r="75"
                  cx="19"
                  cy="50%"
                  fill="#ffffff"
                />
              </svg>
              <a href="#/" className="btn-search">
                <svg
                  width="100%"
                  x="0px"
                  y="0px"
                  viewBox="336 204.5 318 323"
                  enable-background="new 336 204.5 318 323"
                  xml-space="preserve"
                >
                  <g>
                    <path
                      className="icon-search"
                      id="path12423"
                      fill="#FFFFFF"
                      d="M386.9,256.6c-43.3,43.3-43.4,114.2-0.1,157.4c36.7,36.7,93.2,42.2,135.9,16.8l76.3,74.2
		                  c10.5,10.2,27.1,9.8,37.1-0.8c10-10.7,9.8-27.4-0.7-37.6l-75.2-72.9c26.4-42.8,21-100-16-137.1C501,213.3,430.2,213.3,386.9,256.6
	                  	L386.9,256.6z M418.7,288.3c26.1-26.1,67.7-26.1,93.8,0c26.1,26.1,26.1,67.7,0,93.8c-26.1,26.1-67.7,26.1-93.8,0
		                  C392.6,356.1,392.6,314.4,418.7,288.3z"
                    />
                  </g>
                </svg>
              </a>
        </div>
    )
}

export default SearchSvg
