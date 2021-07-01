import React from "react";

<<<<<<< HEAD
 const DonateShareQuestionnaire = ({setIsQuestionAnswerShown, handleSwitchCurrentQuestion}) => {

  const handleYesAnswer = () => {
    handleSwitchCurrentQuestion('donation__share__percentage');
    setIsQuestionAnswerShown(true)
  }
=======
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
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad

  return (
    <div>
      <h2 className="fs-title text-uppercase font-weight-bold">
        This item might be sold and the fund sent to the fund raiser, do you
        want a share of the sales?
      </h2>

      <div className="wrapper">
<<<<<<< HEAD
        <div>
          <input
            type="radio"
            className="item-radio"
            name="choice"
            id="yes"
            onClick={handleYesAnswer}
          />
          <label className="text-dark yes-label" htmlFor="yes">
            Yes
          </label>
        </div>
        <input type="radio" className="item-radio" name="choice" id="no" />

        <label
          className="text-dark no-label"
=======
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
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
          htmlFor="no"
          onClick={() =>
            handleSwitchCurrentQuestion("donate__item__sell__form")
          }
<<<<<<< HEAD
          >
=======
          style={{
            color:
              isQuestionAnswerShown &&
              currentQuestionnaireOpen === "donate__item__sell__form"
                ? "#c75a00"
                : "#000"
          }}
        >
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
          No
        </label>
      </div>
    </div>
  );
};

export default DonateShareQuestionnaire;
