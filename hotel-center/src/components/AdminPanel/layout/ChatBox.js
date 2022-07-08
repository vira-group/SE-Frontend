import React, { useState, Fragment, useEffect } from "react";
import profileImage from "../../../statics/img/profile.png";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

const Contacts = [
  { id: 1, image: profileImage, name: "Hoora Farhangi", unnreadMessages: 2 },
  { id: 2, image: profileImage, name: "Yasaman Farhangi", unnreadMessages: 0 },
  {
    id: 3,
    image: profileImage,
    name: "Mohammad Sajjad Nejati",
    unnreadMessages: 0,
  },
  { id: 4, image: profileImage, name: "Hosein Farhangi", unnreadMessages: 0 },
  { id: 5, image: profileImage, name: "Maman", unnreadMessages: 3 },
  { id: 6, image: profileImage, name: "Baba", unnreadMessages: 0 },
  { id: 7, image: profileImage, name: "Hadiye Eshaqi", unnreadMessages: 0 },
  { id: 8, image: profileImage, name: "Negar Ghofrani", unnreadMessages: 0 },
  {
    id: 9,
    image: profileImage,
    name: "Azade Darabi Moghadam",
    unnreadMessages: 0,
  },
  { id: 10, image: profileImage, name: "Zahra Amiri", unnreadMessages: 0 },
];
const ContactsLength = Contacts.length;

const Messages = [
  { id: 1, author: "other", timeStamp: "9:15 AM", content: "Hi!" },
  { id: 2, author: "other", timeStamp: "9:16 AM", content: "How are you?" },
  {
    id: 3,
    author: "me",
    timeStamp: "12:33 PM",
    content: "Hi! I'm fine, thanks",
  },
  { id: 4, author: "me", timeStamp: "12:33 PM", content: "How about you?" },
  {
    id: 5,
    author: "other",
    timeStamp: "1:45 PM",
    content: "Thanks! I'm fine too",
  },
  {
    id: 6,
    author: "other",
    timeStamp: "1:47 PM",
    content: "Can we meet on the weekend?",
  },
  { id: 7, author: "me", timeStamp: "2:00 PM", content: "Yes, of course!" },
  { id: 8, author: "me", timeStamp: "2:01 PM", content: "What time?" },
  { id: 9, author: "other", timeStamp: "2:03 PM", content: "around 8 pm?" },
  {
    id: 10,
    author: "other",
    timeStamp: "2:10 PM",
    content: "Sounds nice! see you!",
  },
];

export default function ChatBox(props) {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isSmallWindow, setIsSmallWindow] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState(Messages);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSmallWindow(true);
    } else {
      setIsSmallWindow(false);
    }
  }, []);

  useEffect(() => {
    let chatRoomDiv = document.getElementById("chatRoom");
    if (chatRoomDiv) {
      chatRoomDiv.scrollTop = chatRoomDiv.scrollHeight;
    }
  }, [selectedChat, history]);

  const handleOpenChat = (id) => {
    setSelectedChat(Contacts.find((e) => e.id === id));
  };

  const handleSendMessage = () => {
    let current = new Date();
    let ampm = current.getHours() < 12 ? "AM" : "PM";
    let hour = current.getHours() % 12 || 12;
    let minute = ("0" + current.getMinutes()).slice(-2);
    let id = history.length + 1;
    setHistory([
      ...history,
      {
        id,
        author: "me",
        timeStamp: hour + ":" + minute + " " + ampm,
        content: message,
      },
    ]);
    setMessage("");
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCloseChat = () => {
    setSelectedChat(null);
  };

  return (
    <div className="d-flex row h-100">
      {isSmallWindow ? (
        !selectedChat ? (
          <div className="col-12 col-md-5 col-lg-4 contacts">
            {Contacts.map((contact) => (
              <div key={contact.id}>
                <div
                  className="contact"
                  onClick={() => handleOpenChat(contact.id)}
                >
                  <div className="d-flex align-items-center">
                    <img
                      alt={contact.name}
                      src={contact.image}
                      className="avatar"
                    />
                    <span className="name">{contact.name}</span>
                  </div>
                  {contact.unnreadMessages !== 0 ? (
                    <div className="unread-contact">
                      <span>{contact.unnreadMessages}</span>
                    </div>
                  ) : null}
                </div>
                {Contacts[ContactsLength - 1] === contact ? null : <hr />}
              </div>
            ))}
          </div>
        ) : (
          <div className="col-12 col-md-7 col-lg-8 chat-page">
            {selectedChat ? (
              <Fragment>
                <div className="chat-header">
                  <div>
                    <img
                      alt={selectedChat.name}
                      src={selectedChat.image}
                      className="avatar"
                    />
                    <span className="name">{selectedChat.name}</span>
                  </div>
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    onClick={handleCloseChat}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className="messages" id="chatRoom">
                  {history.map((m) => (
                    <div
                      key={m.id}
                      className={
                        m.author === "me"
                          ? "d-flex justify-content-end"
                          : "d-flex justify-content-start"
                      }
                    >
                      <div className={m.author === "me" ? "me" : "other"}>
                        <span className="content">{m.content}</span>
                        <br />
                        <span className="timestamp">{m.timeStamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="type-message">
                  <InputBase
                    sx={{ flex: 1 }}
                    placeholder="Write a message..."
                    onChange={handleChange}
                    value={message}
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: "10px", color: "#cd9a2b" }}
                    onClick={handleSendMessage}
                  >
                    <SendIcon />
                  </IconButton>
                </div>
              </Fragment>
            ) : (
              <div className="start-chat">
                <span>Select a chat to start messaging</span>
              </div>
            )}
          </div>
        )
      ) : (
        <Fragment>
          <div className="col-12 col-md-5 col-lg-4 contacts">
            {Contacts.map((contact) => (
              <div key={contact.id}>
                <div
                  className="contact"
                  onClick={() => handleOpenChat(contact.id)}
                >
                  <div className="d-flex align-items-center">
                    <img
                      alt={contact.name}
                      src={contact.image}
                      className="avatar"
                    />
                    <span className="name">{contact.name}</span>
                  </div>
                  {contact.unnreadMessages !== 0 ? (
                    <div className="unread-contact">
                      <span>{contact.unnreadMessages}</span>
                    </div>
                  ) : null}
                </div>
                {Contacts[ContactsLength - 1] === contact ? null : <hr />}
              </div>
            ))}
          </div>
          <div className="col-12 col-md-7 col-lg-8 chat-page">
            {selectedChat ? (
              <Fragment>
                <div className="chat-header">
                  <div>
                    <img
                      alt={selectedChat.name}
                      src={selectedChat.image}
                      className="avatar"
                    />
                    <span className="name">{selectedChat.name}</span>
                  </div>
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    onClick={handleCloseChat}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className="messages" id="chatRoom">
                  {history.map((m) => (
                    <div
                      key={m.id}
                      className={
                        m.author === "me"
                          ? "d-flex justify-content-end"
                          : "d-flex justify-content-start"
                      }
                    >
                      <div className={m.author === "me" ? "me" : "other"}>
                        <span className="content">{m.content}</span>
                        <br />
                        <span className="timestamp">{m.timeStamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="type-message">
                  <InputBase
                    sx={{ flex: 1 }}
                    placeholder="Write a message..."
                    onChange={handleChange}
                    value={message}
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: "10px", color: "#cd9a2b" }}
                    onClick={handleSendMessage}
                  >
                    <SendIcon />
                  </IconButton>
                </div>
              </Fragment>
            ) : (
              <div className="start-chat">
                <span>Select a chat to start messaging</span>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
}
