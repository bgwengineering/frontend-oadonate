import React from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import { useSelector } from "react-redux";
import { ReactComponent as LoaderSpinn } from "assets/images/244.svg";


const TheLayout = () => {
  const isLoading = useSelector((state) => state.commonReducer.loading);
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <LoaderSpinn />
              <LoaderSpinn />
              <LoaderSpinn />
              <LoaderSpinn />
              <LoaderSpinn />
            </div>
          ) : null}
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
