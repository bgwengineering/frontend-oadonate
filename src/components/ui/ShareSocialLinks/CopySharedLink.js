import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyShared = ({shareUrl}) => {
const [copy, setCopy] =useState("Copy")
const [copied, setCopied] = useState(false)

const onclicked = () =>{
    setCopy("Copied")
}


    return (
        <>   
       <div className="input-group mb-3">
       <input type="text" className="form-control" value={shareUrl} />
       <CopyToClipboard text={shareUrl} onCopy={() => setCopied({copied: true})}>
       <button onClick={onclicked} className={copied ? 'green-btn text-white':'orange-btn text-white'}>{copy}</button>
       </CopyToClipboard>
     </div>
     </>
    );
}



export default CopyShared