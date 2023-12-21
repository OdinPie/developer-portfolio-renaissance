import React from 'react';
import Modal from 'react-modal';

const FirstModal = ({isOpen, onRequestClose}) => {
    Modal.setAppElement('#root');
    // console.log('hello');
    const customStyles = {
        content: {
          top: '0%',
          left: '0%',
          right: 'auto',
          bottom: 'auto',
        //   marginRight: '-50%',
        //   transform: 'translate(-50%, -50%)', 
        height: '100%',
        width: '100%' 
        },
      };

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <h1>Agun News</h1>
        <button onClick={onRequestClose}>Close</button>
      </Modal>
    );
};

export default FirstModal;