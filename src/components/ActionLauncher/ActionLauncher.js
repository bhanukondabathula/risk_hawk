import React from "react";
import sentButton from '../../assets/sent-fast.png'
import "./ActionLauncher.css";

function ActionLauncher() {
  const actions = [
    { label: 'Add Action', primary: true },
    { label: 'Fee Reversal', primary: false },
    { label: 'Retail Onboarding', primary: false },
    { label: 'Address Update', primary: false },
  ];

  return (
  
      <div className="container">
      <div className="ask-catura">
        <div className="ask-header">
          <h2>Ask Catura</h2>
          <div className="actions">
            <button>WhatsApp</button>
            <button>Greetings</button>
          </div>
        </div>
        <div className="greeting-template">
          <p>Greeting Template</p>
          <div className="template-buttons">
            <button>Copy to Send</button>
            <button>Preview</button>
          </div>
        </div>
        <div className="message-input">
          <input type="text" placeholder="Type a message..." />
          <button className="send-button"><img src={sentButton} alt="sent" /> </button>
        </div>
      </div>

    <div className="action-launcher">
      <h1>Action Launcher</h1>
      <div className="search-container">
        <input type="text" placeholder="Search actions..." />
      </div>
      <div className="action-btn">
        {actions.map((action, index) => (
          <button
            key={action.id}
            className={`action-button ${action.primary ? 'primary' : ''}`}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  
      <div className="case-favorite">
        <h3>Case Favorite</h3>
        <div className="case-item">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt...</p>
        </div>
        <div className="case-item">
          <p>Photo</p>
        </div>
        <div className="case-item">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt...</p>
        </div>
      </div>
      </div>
  );
}

export default ActionLauncher;
