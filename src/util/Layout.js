import React from "react";
import Toolbar from "components/ui/Navigation/Toolbar";
import Footer from "components/ui/Footer";
import Scroll from "./Scroll";
import { useSelector } from "react-redux";
import { ReactComponent as LoaderSpinn } from "assets/images/244.svg";

const Layout = (props) => {
  const isLoading = useSelector((state) => state.commonReducer.loading);
  return (
    <div>
      <Toolbar />
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <LoaderSpinn />
          <LoaderSpinn />
          <LoaderSpinn />
          <LoaderSpinn />
          <LoaderSpinn />
        </div>
      ) : null}
      <main>{props.children}</main>
      <Scroll />
      <Footer />
    </div>
  );
};

export default Layout;
