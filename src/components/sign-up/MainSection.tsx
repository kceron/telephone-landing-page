import React, { useState } from "react";

import Header from "./Header";
import SignUpForm from "./SignUpForm";
import ProgressBar from "./ProgressBar";
import FinalCard from "./FinalCard";
import { InitialScreen } from "./InitialScreen";

const MainSection = ({
  step,
  setStep,
  joined,
  setJoined,
  displayFaq,
  setDisplayFaq,
}) => {
  
  return (
    <div className={`main_section ${step === 5 ? "final_card" : ""}`}>
      {joined === false ? (
        <Header displayFaq={displayFaq} setDisplayFaq={setDisplayFaq} />
      ) : null}
      {joined === false ? (
        <InitialScreen setJoined={setJoined} />
      ) : (
        <>
          {step === 5 ? null : (
            <ProgressBar step={step} setStep={setStep} setJoined={setJoined} />
          )}

          {step === 5 ? (
            <FinalCard displayFaq={displayFaq} setDisplayFaq={setDisplayFaq} />
          ) : (
            <SignUpForm step={step} setStep={setStep} />
          )}
        </>
      )}
    </div>
  );
};

export default MainSection;
