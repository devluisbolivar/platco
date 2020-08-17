import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOptions.css";
import db from "../../firebase";

const SidebarOptions = ({
  Icon,
  title,
  id,
  addChannelOption,
  setOpenChannel,
  openChannel,
}) => {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const handleClick = () => {
    setOpenChannel(!openChannel);
  };

  return (
    <div
      className="sidebarOption"
      onClick={
        addChannelOption
          ? addChannel
          : setOpenChannel
          ? handleClick
          : selectChannel
      }
    >
      {Icon && <Icon className="sidebarOption_icon " />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOptions;
