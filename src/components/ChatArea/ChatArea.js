import React from "react";
import sentButton from '../../assets/sent-fast.png'
import "./ChatArea.css";

const ChatArea = () => {
  return (
    <div className="conversation-wrapper">
      <div className="chat-tabs-container">
        <div className="chat-tabs">
          <div className="chat-tab active">Conversation</div>
          <div className="chat-tab">Address Update</div>
          <div className="chat-tab">Fee Reversal</div>
          <div className="chat-tab">Retention</div>
        </div>
        <button className="escalate-button">Escalate</button>
      </div>

      <div className="conversation-section">
        <div className="message">
          <div className="timeline">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
          </div>
          <div className="message-avatar">CB</div>
          <div className="message-content">
            <div className="message-header">
              <strong>Rachel Adams</strong>
              <span className="message-meta">9:08 PM · Received By WhatsApp</span>
              <span className="status-icon">✔</span>
            </div>
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus
              ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
              Egestas mattis pellentesque nibh dui sed malesuada dolor eget
              ipsum. Molestie nam morbi id arcu volutpat arcu.
            </p>
          </div>
        </div>

        <div className="message outgoing">
          <div className="timeline">
            <div className="timeline-dot"></div>
          </div>
          <div className="message-avatar">HK</div>
          <div className="message-content">
            <div className="message-header">
              <strong>You</strong>
              <span className="message-meta">27 Jul, 2024 9:08 PM · Sent By WhatsApp</span>
              <span className="status-icon">✔</span>
            </div>
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus
              ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
              Egestas mattis pellentesque nibh dui sed malesuada dolor eget
              ipsum. Molestie nam morbi id arcu volutpat arcu.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="channel-options">
          <label>
            <input type="checkbox" /> SMS
          </label>
          <label>
            <input type="checkbox" checked /> WhatsApp
          </label>
          <label>
            <input type="checkbox" /> Email
          </label>
        </div>
        <div className="message-input">
          <input type="text" placeholder="Type a message..." />
          <button className="send-button"><img src={sentButton} alt="sent" /> Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
