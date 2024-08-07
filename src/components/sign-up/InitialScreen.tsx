import React from "react";
import { TbWorld } from "react-icons/tb";

type Props = {
  setDisplayHowToPlay: (show: boolean) => void;
  setJoined: (joined: boolean) => void;
};

export const InitialScreen = ({ setDisplayHowToPlay, setJoined }: Props) => {
  return (
    <>
      <div className="message initial_screen">
        A message changing forms as it travels across the world{" "}
        <span className="world_icon">
          <TbWorld />
        </span>{" "}
        from artist → artist.
      </div>
      <div className="landing_page_animation">
        <img
          src="/static/optimized-tele.gif"
          alt="telephone-animation"
          width="300"
          height="450"
        />
      </div>
      <div>
        <button
          className="main_btn btn_white"
          onClick={() => setDisplayHowToPlay(true)}
        >
          How do I play?
        </button>
        <button className="main_btn" onClick={() => setJoined(true)}>
          Join
        </button>
      </div>
    </>
  );
};
