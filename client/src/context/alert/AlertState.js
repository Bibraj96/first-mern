import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import {
  SET_ALERT, REMOVE_ALERT
} from '../types'

const AlertState = props => {
  const initialState = []

  const [state, dispatch] = useReducer(alertReducer, initialState)

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