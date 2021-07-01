import React from "react";
import Toolbar from "components/ui/Navigation/Toolbar";
import Footer from "components/ui/Footer";
import Scroll from "./Scroll";
import { useSelector } from "react-redux";
import { ReactComponent as LoaderSpinn } from "assets/images/244.svg";

const Layout = (props) => {
  const isLoading = useSelector(state => state.commonReducer.loading);
  return (
    <>
      <Toolbar />
      {isLoading ? (
        <div className="d-flex justify-content-space-around" style={{width:"100%"}}>
          <LoaderSpinn />
          <LoaderSpinn />
          <LoaderSpinn />
        </div>
      ) : null}
    <div>
      <main>{props.children}</main>
      <Scroll />
      <Footer />
    </div>
    </>
  );
};

export default Layout;
