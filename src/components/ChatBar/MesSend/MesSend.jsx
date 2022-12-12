import React from "react";

import "./MesSend.css";

function MesSend({ id_sender, id_recipient, text_message }) {
  if (id_sender == 1) {
    return (
      <div className="message-user">
        <img className="message-user-photo" src="" alt="" />
        <div className="message-user-t">
          <span className="text-message-user">{text_message}</span>
        </div>
        <img className="message-more-user" src="" alt="" />
      </div>
    );
  } else {
    return (
      <div className="message-res">
        <img className="message-res-photo" src="" alt="" />
        <div className="message-res-t">
          <span className="text-message-res">{text_message}</span>
        </div>
        <img className="message-more-res" src="" alt="" />
      </div>
    );
  }
}

export default MesSend;
