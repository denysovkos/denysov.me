import { IContact,  IContactAction } from 'models/contact';

/** Action Types */
export const OPEN: string = 'contact/OPEN';
export const SEND: string = 'contact/SEND';
export const SEND_SUCCESS: string = 'contact/SEND_SUCCESS';
export const SEND_FAIL: string = 'contact/SEND_FAIL';
export const CLOSE: string = 'contact/CLOSE';

/** Counter: Initial State */
const initialState:  IContact = {
  isOpen: false,
  isSending: false,
};

/** Reducer: CounterReducer */
export function contactReducer(state = initialState, action?:  IContactAction) {
  switch (action.type) {
    case OPEN:
      return {
        isOpen: true,
        isSending: false,
      };

    case SEND:
      return {
        isSending: true,
      };

    case SEND_SUCCESS:
    return {
      isSending: false,
      message: 'Email was sent!',
    };

    case SEND_FAIL:
    return {
      isSending: false,
      message: 'Email was not sent!',
      error: true,
    };

    case CLOSE:
    return {
      isOpen: false,
      isSending: false,
    };

    default:
      return state;
  }
}

/** Action Creator: Open Modal */
export function openModal(): IContactAction {
  return {
    type: OPEN,
  };
}

/** Action Creator: Close Modal */
export function closeModal(): IContactAction {
  return {
    type: CLOSE,
  };
}

/** Action Creator */
export function startSending(): IContactAction {
  return {
    type: SEND,
  };
}

/** Action Creator */
export function wasSend(): IContactAction {
  return {
    type: SEND_SUCCESS,
  };
}

/** Action Creator */
export function sendError(): IContactAction {
  return {
    type: SEND_FAIL,
  };
}

/** Action Creator: Send email */
export function sendEmail(email, message): IContactAction {
  return (dispatch) => {
    dispatch(startSending());

    fetch('/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({email, message}),
    }).then((result) => result.json())
    .then((result) => {
      if (result.success) {
        dispatch(wasSend());
      } else {
        dispatch(sendError());
      }
    })
    .catch((err) => console.log(err));
  };
};
