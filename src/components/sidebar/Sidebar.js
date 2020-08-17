import React, { useState, useEffect, Fragment } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from "./SidebarOptions";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  const [openChannel, setOpenChannel] = useState(true);
  const [openOptions, setOpenOptions] = useState(true);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Didacpro</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOptions Icon={InsertCommentIcon} title="Hilos" />
      <SidebarOptions Icon={InboxIcon} title="Menciones & reacciones" />
      <SidebarOptions Icon={DraftsIcon} title="Elementos guardados" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Buscador de canales" />
      <SidebarOptions Icon={PeopleAltIcon} title="Personas & grupos" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="Buscador de archivos" />
      <SidebarOptions
        Icon={openOptions ? ExpandLessIcon : ExpandMoreIcon}
        title={openOptions ? `Mostrar menos` : `Mostrar mas`}
      />
      <hr />
      <SidebarOptions
        Icon={openChannel ? ExpandLessIcon : ExpandMoreIcon}
        title="Canales"
        setOpenChannel={setOpenChannel}
        openChannel={openChannel}
      />
      {openChannel ? (
        <Fragment>
          <hr />
          <SidebarOptions
            Icon={AddIcon}
            addChannelOption
            title="Agregar canal"
          />
          {channels.map((channel) => (
            <SidebarOptions
              key={channel.id}
              id={channel.id}
              title={channel.name}
            />
          ))}
        </Fragment>
      ) : null}
    </div>
  );
};

export default Sidebar;
