import React from "react";
import Toolbar from "components/ui/Navigation/Toolbar";
import Footer from "components/ui/Footer";
import Scroll from "./Scroll";
import { useSelector } from "react-redux";
import { ReactComponent as LoaderSpinn } from "assets/images/244.svg";

const Layout = (props) => {
<<<<<<< HEAD
  const isLoading = useSelector((state) => state.commonReducer.loading);
  return (
    <>
          <Toolbar />
=======
  const isLoading = useSelector(state => state.commonReducer.loading);
  return (
    <>
      <Toolbar />
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
      {isLoading ? (
        <div className="d-flex justify-content-space-around" style={{width:"100%"}}>
          <LoaderSpinn />
          <LoaderSpinn />
          <LoaderSpinn />
<<<<<<< HEAD
          {/* <LoaderSpinn /> */}
          {/* <LoaderSpinn />
          <LoaderSpinn /> */}
=======
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
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
