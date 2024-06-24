import React, { useEffect, useState } from "react";
import Header from "./Header";

import { Alert } from "antd";
import "../../styles/finalCard.css";

const FinalCard = ({ displayFaq, setDisplayFaq }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (copySuccess) {
      let timer = setTimeout(() => {
        setCopySuccess(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [copySuccess]);

  async function copyToClip() {
    const url = "telephonegame.art";
    await navigator.clipboard.writeText(url);
    setCopySuccess(true);
  }

  return (
    <div className="main_section_box">
      <div className="final_card_header">
        <Header displayFaq={displayFaq} setDisplayFaq={setDisplayFaq} />
        <section className="final_card_info">
          <img
            src="public/static/teleIcon.png"
            style={{
              paddingRight: "1rem",
              marginTop: "0.5rem",
              height: "clamp(3.5rem, 7vh, 80px)",
            }}
          />
          <p style={{ paddingRight: "50%" }} className="message">
            {" "}
            Stay by the phone, we’re just a whisper away ❉ We’ll let you know
            when it’s your turn to play!
          </p>
        </section>
      </div>
      {copySuccess ? (
        <Alert
          message="Link copied to clipboard!"
          // type="success"
          type="info"
          showIcon
          // closable={true}
          // onClose={() => setCopySuccess(false)}
          className="final_card_alert"
        />
      ) : null}

      <div className="landing_page_animation">
        <img
          src="/static/optimized-tele.gif"
          alt="telephone-animation"
          width="300"
          height="450"
        />
      </div>
      <button className="main_btn btn_white" onClick={copyToClip}>
        Refer a friend
      </button>
    </div>
  );
};

export default FinalCard;
