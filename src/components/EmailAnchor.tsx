import React from "react";
import "../App.css";

export const CONTACT_EMAIL = "telephone.outreach@gmail.com";

export const EmailAnchor = () => {
  return (
    <a className="faq_email" href={`mailto:${CONTACT_EMAIL}`} target="_blank">
      <span>{CONTACT_EMAIL}</span>
    </a>
  );
};
