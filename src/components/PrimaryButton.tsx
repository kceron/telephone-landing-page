import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export const PrimaryButton = ({ onClick, text }: Props) => {
  // Should at some point accept class names
  return (
    <>
      <button className="main_btn" onClick={() => onClick()}>
        {text}
      </button>
    </>
  );
};
