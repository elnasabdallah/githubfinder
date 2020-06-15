import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './GithubReducer';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_ALERT,
  SET_LOADING,
  GET_REPOS,
  GET_USER
} from '../types';

let githubClientId;
let githubClientSecrete;
if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecrete = process.env.REACT_APP_GITHUB_CLIENT_SECRETE;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecrete = process.env.GITHUB_CLIENT_SECRETE;
}
const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //search users

  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };
  //get user
  const getUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`
    );

    dispatch({ type: GET_USER, payload: res.data });
  };
  //get repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  //clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  //setloading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        laoding: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
