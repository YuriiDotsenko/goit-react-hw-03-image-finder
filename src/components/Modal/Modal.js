import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Modal.css';
import { createPortal } from 'react-dom';

const rootModal = document.querySelector('#root-modal');

class Modal extends Component {
  state = {};

  static propTypes = {
    toggleModal: propTypes.func.isRequired,
    children: propTypes.node.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  handleEscape = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <div className="Backdrop" onClick={this.handleBackdrop}>
        <div className="Content">{this.props.children}</div>
      </div>,
      rootModal,
    );
  }
}

export default Modal;
