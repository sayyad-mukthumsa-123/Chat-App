import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Picker from "emoji-picker-react";
import "../Styles/ChatInput.css";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div className="chat-input-container">
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill
            onClick={handleEmojiPickerhideShow}
            className={showEmojiPicker ? "emoji-icon active" : "emoji-icon"}
          />
          {showEmojiPicker && (
            <div className="emoji-picker-wrapper">
              <div className="emoji-hint">Click emoji button below to close</div>
              <Picker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <div className="chat-input">
          <input
            type="text"
            placeholder="type your message here"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <button type="submit" id="send-btn">
            <IoMdSend />
          </button>
        </div>
      </form>
    </div>
  );
}
