import React from 'react';
import Modal from 'react-modal';

const ThirdModal = ({isOpen, onRequestClose}) => {
    Modal.setAppElement('#root');

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Glossy Guru</h1>
      </Modal>
    );
};

export default ThirdModal;