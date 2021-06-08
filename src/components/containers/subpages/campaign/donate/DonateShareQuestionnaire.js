import React from "react";

 const DonateShareQuestionnaire = ({setIsQuestionAnswerShown, handleSwitchCurrentQuestion}) => {

  const handleYesAnswer = () => {
    handleSwitchCurrentQuestion('donation__share__percentage');
    setIsQuestionAnswerShown(true)
  }

  
  return (
    <div>
      <h2 className="fs-title text-uppercase font-weight-bold">
        This item might be sold and the fund sent to the fund raiser, do you
        want a share of the sales?
      </h2>

      <div className="wrapper">
        <div>
          <input
            type="radio"
            className="item-radio"
            name="choice"
            id="yes"
            onClick={handleYesAnswer}
          />
          <label className="text-dark yes-no-label" htmlFor="yes">
            Yes
          </label>
        </div>
        <input type="radio" className="item-radio" name="choice" id="no" />
        <label
          className="text-dark yes-no-label"
          htmlFor="no"
          onClick={() =>
            handleSwitchCurrentQuestion("donate__item__sell__form")
          }
        >
          No
        </label>
      </div>
    </div>
  );
};

export default DonateShareQuestionnaire;
