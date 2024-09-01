import React from "react";
import Button from "./Button";
const TimeLine = ({ timeLine, onTimeLineItemClick, currentStep }) => {
  return (
    <React.Fragment>
      <h2>History</h2>
      {timeLine.map((_, index) => {
        let buttontext = `Langkah #${index}`;

        if (index === 0) {
          buttontext = "Mulai Dari Awal!";
        }
        return (
          <Button
            active={currentStep === index}
            key={index}
            onClick={() => onTimeLineItemClick(index)}
          >
            {buttontext}
          </Button>
        );
      })}
    </React.Fragment>
  );
};

export default TimeLine;
