import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";

import { IoMenu } from "react-icons/io5";

const Header = ({ displayFaq, setDisplayFaq, step }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: (
        <a href="https://phonebook.gallery/" target="_blank">
          Our last game
        </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          style={{ width: "100%" }}
          onClick={() => setDisplayFaq(!displayFaq)}
        >
          FAQ
        </div>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="https://www.psychopompprojects.com/telephone" target="_blank">
          Introduction and Theory Group
        </a>
      ),
      key: "2",
    },
  ];
  console.log("FINAL sssss--", step);
  return (
    <header className={`header ${step === 5 ? "final_card_header" : ""}`}>
      <span className="main_text">TELEPHONE</span>
      <div
        className="ham_menu"
        onClick={() => setDisplayDropdown(!displayDropdown)}
      >
        <Dropdown
          menu={{ items }} // hover can't be used on touchscreens
          trigger={["click"]}
          placement="bottom"
        >
          <a onClick={(e) => e.preventDefault()}>
            <IoMenu size={26} />
          </a>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
