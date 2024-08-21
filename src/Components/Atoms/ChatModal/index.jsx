import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const ChatModal = ({ onClose }) => {
  return (
    <div className={styles.chatModalOverlay}>
      <div className={styles.chatModal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.chatContent}>
          <p>Bem-vindo ao chat com ChatGPT!</p>
        </div>
      </div>
    </div>
  );
};

ChatModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChatModal;
