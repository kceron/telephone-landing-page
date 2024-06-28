import "./App.css";
import React, { useState } from "react";
import MainSection from "./components/sign-up/MainSection";
import Faq from "./components/sign-up/Faq";
import { ConfigProvider } from "antd";

function App() {
  const [joined, setJoined] = useState(false);
  const [displayFaq, setDisplayFaq] = useState(false);
  const [step, setStep] = useState<number>(4);

  return (
    <div className={`App ${step === 5 && !displayFaq ? "final_card" : ""}`}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "black",
          },
          components: {
            Button: {
              colorPrimary: "rgb(0, 0, 0)",
              borderRadius: 5,
            },
          },
        }}
      >
        {displayFaq ? (
          <Faq setDisplayFaq={setDisplayFaq} />
        ) : (
          <MainSection
            step={step}
            setStep={setStep}
            joined={joined}
            setJoined={setJoined}
            displayFaq={displayFaq}
            setDisplayFaq={setDisplayFaq}
          />
        )}
      </ConfigProvider>
    </div>
  );
}

export default App;
