import React from "react";
import messageframe from '../../assets/message_frame.png';
import direction from '../../assets/direction_arrow.png';
import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="tabs-container">

      <div className="tab">
        <div className="user-initials init-1">CB</div>
        <span className="user-name">Cheyenne Bergson</span>
      </div>

      <div className="tab">
        <div className="user-initials">CB</div>
        <span className="user-name">Jonathan Higgins</span>
      </div>

      <div className="tab">
        <div className="user-initials">CT</div>
        <span className="user-name">Capt. Trunk</span>
      </div>

      <div className="tab select">
        <div className="user-initials">HS</div>
        <span className="user-name">Hannibal Smith</span>
      </div>

      <div className="tab">
        <div className="user-initials">CT</div>
        <span className="user-name">Capt. Trunk</span>
      </div>

      <div className="tab">
        <div className="user-initials">HS</div>
        <span className="user-name">Hannibal Smith</span>
        <span className="message-count">2</span>
      </div>

      <div className="messaging-tab">
        <img src={messageframe} alt="message" />
        <button className="messaging-button">Messaging</button>
        <img src={direction} alt="direction_arrow"/>
      </div>
    </div>
  );
};

export default Tabs;
