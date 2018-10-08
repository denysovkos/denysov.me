import * as React from 'react';
import { toast } from 'react-toastify';
// import { sendEmail } from 'redux/modules/contact/index';
// const { connect } = require('react-redux');
const style = require('./style.css');

class ContactForm extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      robot: '',
      emailValid: null,
      messageValid: null,
      isRobotValid: null,
      code: String(Math.ceil(Math.random() * 100000)),
    };
  }

  private notify = (message) => toast(message);

  private handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  private validate = () => {
    // tslint:disable-next-line:max-line-length
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.setState({
      messageValid: this.state.message.length > 5,
      emailValid: emailRE.test(this.state.email),
      isRobotValid: this.state.robot === this.state.code,
    });
  }

  private handleEmailSend = () => {
    const {sendEmail} = this.props;
    const {email, message} = this.state;

    Promise.resolve()
      .then(() => this.validate())
      .then(() => {
        if (this.isValid()) {
          sendEmail(email, message);
        } else {
          this.notify('Please, fill this form!');
          throw new Error('Form is empty or invalid');
        }
      })
      .then(() => this.notify('Email was sent. Thank you! :)'))
      .catch((err) => console.log('err', err));
  }

  private isValid = () => {
    return this.state.emailValid && this.state.messageValid && this.state.isRobotValid;
  }

  public render() {
    const {closeModal} = this.props;
    const buttonStyle = {
      background: 'greenyellow',
      marginRight: 15,
    };

    return (
      <section style={{width: '60vw'}}>
        <h2>Contact form:</h2>
        <form>
          E-mail:<br/>
          <input type="text" name="email" onChange={this.handleChange} className={style.Input} />
          Message:<br/>
          <textarea name="message" onChange={this.handleChange} className={style.Input} />
          Please, enter code:<br/>
          <div style={{display: 'inline-flex'}}>
            <strong style={{fontSize: 30, paddingRight: 10}}>{this.state.code}</strong>
            <input type="text" name="robot" onChange={this.handleChange} className={style.Input} />
          </div>
          <br />
          {!this.state.emailValid === false && <strong>Enter email or email is invalid</strong>}
          <br />
          {!this.state.isRobotValid === false && <strong>Entered code is incorrect.</strong>}
        </form>
          <button style={buttonStyle} onClick={this.handleEmailSend}>Send email</button>
          <button onClick={closeModal}>Close</button>
      </section>
    );
  }
}

export { ContactForm };
