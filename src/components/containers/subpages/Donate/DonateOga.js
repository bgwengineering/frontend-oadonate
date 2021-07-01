import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import DonateOgaCashForm from "components/ui/Forms/DonateOgaCashForm";
import DonateOgaItemForm from "components/ui/Forms/DonateOgaItemForm";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as LoaderSpinn } from "assets/images/244.svg";

const DonateOga = ({ history }) => {
  const [currentOpenForm, setCurrentOpenForm] = useState(null);
  const [isDonateOgaFormOpen, setIsDonateOgaForm] = useState(false);

  const handleCurrentFormOpen = showForm => {
    setCurrentOpenForm(showForm);
  };
  const isLoading = useSelector(state => state.fundDonateReducer.loading);
  const isAuthenticated = useSelector(
    state => state.authReducer.isAuthenticated
  );

  const openDonateItemForm = () => {
    setIsDonateOgaForm(true);
    handleCurrentFormOpen("donate__item__form");
  };

  const openDonateCashForm = () => {
    setIsDonateOgaForm(true);
    handleCurrentFormOpen("donate__cash__form");
  };
  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <LoaderSpinn />
          <LoaderSpinn />
          <LoaderSpinn />
        </div>
      ) : null}
      <div style={{ display: isDonateOgaFormOpen ? "none" : "block" }}>
        <div className="ogaDonasi" style={{ backgroundColor: "#05591B" }}>
          <div className="ikon">
            <Link
              title="Click and fill in your details"
              id="donate_item_btn"
              style={{ backgroundColor: "#C75A00" }}
              role="button"
              onClick={() => {
                isAuthenticated ? openDonateItemForm() : history.push("/auth");
              }}
            >
              <span>Donate Item</span>
            </Link>
          </div>
          <div className="deskripsi text-white">
            <span className="judul">DONATE ITEM</span>
            Donate that idle item
          </div>
        </div>

        <div className="ogaDonasi" style={{ backgroundColor: "#05591B" }}>
          <div className="ikon">
            <Link
              title="Click and fill in your details"
              id="donate_cash_btn"
              style={{ backgroundColor: "#C75A00" }}
              role="button"
              onClick={()=>{isAuthenticated ? openDonateCashForm() : history.push('/auth')}}
            >
              <span>Donate Cash</span>
            </Link>
          </div>
          <div className="deskripsi text-white">
            <span className="judul">DONATE CASH</span>
            Donate Cash
          </div>
        </div>
      </div>

      <div
        id="donate__cash__form"
        className="oga_cash_form_parent"
        style={{
          display: currentOpenForm === "donate__cash__form" ? "block" : "none"
        }}
      >
        <DonateOgaCashForm
          setIsDonateOgaForm={setIsDonateOgaForm}
          setCurrentOpenForm={setCurrentOpenForm}
        />
      </div>

      <div
        id="donate__item__form"
        className="oga_item_form_parent"
        style={{
          display: currentOpenForm === "donate__item__form" ? "block" : "none"
        }}
      >
        <DonateOgaItemForm
          setCurrentOpenForm={setCurrentOpenForm}
          setIsDonateOgaForm={setIsDonateOgaForm}
        />
      </div>
    </>
  );
};

export default withRouter(DonateOga);
