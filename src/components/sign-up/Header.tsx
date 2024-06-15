import React, { useState } from "react";

import Faq from "./Faq"
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

import { IoMenu } from "react-icons/io5";

const Header = () => {
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
        <Faq />
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

  return (
    <header className="header">
      <span className="main_text">TELEPHONE</span>
      <div
        className="ham_menu"
        onClick={() => setDisplayDropdown(!displayDropdown)}
      >
        <Dropdown menu={{ items }} trigger={["click"]} placement="bottom">
          <a onClick={(e) => e.preventDefault()}>
            <IoMenu size={26} />
          </a>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
