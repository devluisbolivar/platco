import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccesTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccesTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Buscar algo interesante" />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
