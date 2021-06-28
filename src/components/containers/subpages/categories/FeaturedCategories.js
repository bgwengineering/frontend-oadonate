import React from "react";
import CampaignCardImport from "../campaign/CampaignCardImport";


const FeaturedCauses = () => {
  return (
    <>
      <div className="feature-headline text-center">
        <h1 className="text-capitalize">Featured Fundraisers</h1>
        <p>Campaign selected by our team</p>
      </div>
       <CampaignCardImport />
    </>
  );
};

export default FeaturedCauses;
