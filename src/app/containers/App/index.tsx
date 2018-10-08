const appConfig = require('../../../../config/main');

import * as React from 'react';
const { connect } = require('react-redux');
import { Helmet } from 'react-helmet';
import * as Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { Header, Footer, ContactForm } from 'components';

import { openModal, closeModal, sendEmail } from 'modules/contact/';

const style = require('./style.css');

@connect(
  (state) => ({ contact: state.contact }),
  (dispatch) => ({
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    sendEmail: (email, message) => dispatch(sendEmail(email, message)),
  }),
)

class App extends React.Component<any, any> {
  public componentDidMount() {
    Modal.setAppElement('#app');
  };

  public render() {
    const { openModal, closeModal, sendEmail, contact } = this.props;

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
      <div id="wrapper">
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header openModal={openModal} />
        {this.props.children}
        <Footer />

        <Modal
          isOpen={contact.isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className={style.Modal}
          overlayClassName={style.Overlay}
        >
          <ContactForm sendEmail={sendEmail} closeModal={closeModal} contact={contact} />
        </Modal>
        <ToastContainer />
      </div>
    );
  }
}

export { App }
