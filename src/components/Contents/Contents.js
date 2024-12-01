import React from "react";
import UserDetails from "../UserDetails/UserDetails";
import ChatArea from "../ChatArea/ChatArea";
import ActionLauncher from "../ActionLauncher/ActionLauncher";
import "./Contents.css";

function Contents() {
  return (
    <div className="content-container">
        <UserDetails />
        <ChatArea />
        <ActionLauncher />
    </div>
  );
}

export default Contents;