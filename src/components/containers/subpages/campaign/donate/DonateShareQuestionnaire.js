import React from "react";

const DonateShareQuestionnaire = ({
  setIsQuestionAnswerShown,
  handleSwitchCurrentQuestion,
  currentQuestionnaireOpen,
  isQuestionAnswerShown
}) => {
  const handleYesAnswer = () => {
    handleSwitchCurrentQuestion("donation__share__percentage");
    setIsQuestionAnswerShown(true);
  };

  return (
    <div>
      <h2 className="fs-title text-uppercase font-weight-bold">
        This item might be sold and the fund sent to the fund raiser, do you
        want a share of the sales?
      </h2>

      <div className="wrapper">
        <div
          onClick={handleYesAnswer}
          style={{
            color:
              isQuestionAnswerShown &&
              currentQuestionnaireOpen === "donation__share__percentage"
                ? "#0f6929"
                : "#000"
          }}
        >
          <input
            type="checkbox"
            className="item-radio"
            name="choice"
            id="yes"
          />
          <label className="yes-label" htmlFor="yes">
            Yes
          </label>
        </div>

        <input type="checkbox" className="item-radio" name="choice" id="no" />
        <label
          className="no-label"
          htmlFor="no"
          onClick={() =>
            handleSwitchCurrentQuestion("donate__item__sell__form")
          }
          style={{
            color:
              isQuestionAnswerShown &&
              currentQuestionnaireOpen === "donate__item__sell__form"
                ? "#c75a00"
                : "#000"
          }}
        >
          No
        </label>
      </div>
    </div>
  );
};

export default DonateShareQuestionnaire;
