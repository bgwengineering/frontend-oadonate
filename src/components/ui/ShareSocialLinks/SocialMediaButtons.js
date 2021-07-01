import React from "react";
import { FaTwitter, FaFacebook, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";


const SocialMediaButtons = ({shareUrl}) => {
  const text = "share this pls";

  return (
    <>
      <div className='container'>
          <div className='row'>
          <div className='col-lg-4 fs-2'>
        <FacebookShareButton url={shareUrl} qoute={text} title={text}>
          <FaFacebook />
        </FacebookShareButton>
        </div>

        <div className='col-lg-4 fs-2'>
        <TwitterShareButton url={shareUrl} qoute={text} title={text} >
          <FaTwitter />
        </TwitterShareButton>
        </div>
        <div className='col-lg-4 fs-2'>
        <EmailShareButton url={shareUrl} qoute={text} title={text}>
          <AiOutlineMail />
        </EmailShareButton>
        </div>
        <div className='col-lg-4 fs-2'>
        <LinkedinShareButton url={shareUrl} qoute={text} title={text}>
          <FaLinkedinIn />
        </LinkedinShareButton>
        </div>
        <div className='col-lg-4 fs-2'>
        <WhatsappShareButton url={shareUrl} qoute={text} title={text}>
          <FaWhatsapp/>
        </WhatsappShareButton>
        </div>
        </div>
      </div>
     </>
  );
};

export default SocialMediaButtons;
