import React from "react";

import "./mobile_room.css";
import useChat from "./useChat";
import SendIcon from "@mui/icons-material/Send";

const ChatRoom = (props) => {
  const session = JSON.parse(window.sessionStorage.getItem("data"));

  const place = window.location.href;
  var arr = place.split("/");

  const { roomId } = arr[4];
  const { messages, sendMessage } = useChat(arr[4]);

  const [newMessage, setNewMessage] = React.useState("");
  const [newuser, setNewUser] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
    setNewUser(session.data.user_name);
  };

  const handleSendMessage = () => {
    sendMessage(newuser + " : " + newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-containers">
      <div className="messages-containers">
        <div class="admin_messages">
          <br />
          <span>📢 사장님과 자유롭게 소통해보세요.</span>
        </div>
        <ol className="messages-lists">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-items ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="메세지를 입력해주세요."
        className="new-message-input-fields"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        <SendIcon />
      </button>
    </div>
  );
};

export default ChatRoom;
