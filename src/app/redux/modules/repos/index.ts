import { IRepos, IReposAction } from 'models/repos';

/** Action Types */
export const GET_REQUEST: string = 'repos/GET_REQUEST';
export const GET_SUCCESS: string = 'repos/GET_SUCCESS';
export const GET_FAILURE: string = 'repos/GET_FAILURE';

/** Initial State */
const initialState: IRepos = {
  isFetching: false,
  repos: [],
};

/** Reducer */
export function reposReducer(state = initialState, action: IReposAction) {
  switch (action.type) {
    case GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        repos: [],
      });

    case GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        repos: action.payload,
      });

    case GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload,
        error: true,
      });

    default:
      return state;
  }
}

/** Async Action Creator */
export function getRepos() {
  return (dispatch) => {
    dispatch(reposRequest());

    return fetch('https://api.github.com/users/denysovkos/repos')
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => dispatch(reposSuccess(res)));
        } else {
          return res.json()
            .then((res) => dispatch(reposFailure(res)));
        }
      })
      .catch((err) => dispatch(reposFailure(err)));
  };
}

/** Action Creator */
export function reposRequest(): IReposAction {
  return {
    type: GET_REQUEST,
  };
}

/** Action Creator */
export function reposSuccess(repos: any[]): IReposAction {
  return {
    type: GET_SUCCESS,
    payload: repos,
  };
}

/** Action Creator */
export function reposFailure(message: any): IReposAction {
  return {
    type: GET_FAILURE,
    payload: {
      message,
    },
  };
}
