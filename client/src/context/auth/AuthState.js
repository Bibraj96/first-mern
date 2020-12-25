import React, { useReducer } from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types'

const authState = props => {
  const initialState = {
    // Access browser's local storage and look for token
    token: localStorage.getItem('token'),
    // Tells us if a user is logged in
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors


  // We need to wrap our entire app with this context
  return (
    <AuthContext.Provider
    // Anything we want to be able to access from other comps including state and other actions need to go in here.
    // We get state from userReducer and use it to get all of the contacts for now
    value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error,
    }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthState