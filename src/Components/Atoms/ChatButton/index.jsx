import React, { useState } from "react";
import ChatModal from "../ChatModal";
import styles from "./index.module.scss";
import chatIcon from "../../../Assets/tekia.svg";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.chatButton} onClick={toggleModal}>
        <img src={chatIcon} alt="Chat GPT" />
      </div>
      {isOpen && <ChatModal onClose={toggleModal} />}
    </>
  );
};

export default ChatButton;
