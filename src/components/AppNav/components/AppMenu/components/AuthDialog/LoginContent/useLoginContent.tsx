import { useReducer } from "react";
import { useAuth } from "../../../../../../../stateManagement/AuthState/AuthProvider";

/**
 * Initial state object for user login form
 * Contains empty string values for all login fields
 * @type {Object}
 * @property {string} email - User's email address or username
 * @property {string} password - User's password
 */
const initialState = {
  email: "",
  password: "",
};

/**
 * Reducer function to manage login form state
 * Handles different action types to update specific form fields or reset the entire state
 * @function
 * @param {Object} state - Current state object containing login form data
 * @param {Object} action - Dispatch action object
 * @param {string} action.type - Action type (setEmail, setPassword, resetState)
 * @param {any} action.payload - Value to update in state (optional, not used for resetState)
 * @returns {Object} Updated state object
 * @throws {Error} If action type is not recognized
 * @example
 * dispatch({ type: "setEmail", payload: "user@example.com" });
 * dispatch({ type: "setPassword", payload: "myPassword123" });
 * dispatch({ type: "resetState" });
 */
const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "resetState":
      return initialState;
    default:
      throw new Error("Nothing to do !!");
  }
};

/**
 * Custom hook for managing user login form state and submission
 * Handles form state management and API communication for user authentication
 * @function
 * @returns {Object} Hook return object
 * @returns {Object} return.loginState - Current login form state containing email and password
 * @returns {Function} return.loginDispatch - Reducer dispatch function to update form state
 * @returns {Function} return.handleLoginSubmit - Form submission handler
 * @example
 * const { loginState, loginDispatch, handleLoginSubmit } = useLoginContent();
 *
 * // Update a form field
 * loginDispatch({ type: "setEmail", payload: "user@example.com" });
 * loginDispatch({ type: "setPassword", payload: "myPassword123" });
 *
 * // Submit the form
 * handleLoginSubmit();
 */
const useLoginContent = () => {
  const { handleLogin } = useAuth();
  const [loginState, loginDispatch] = useReducer(reducer, initialState);

  /**
   * Handles login form submission
   * Extracts form data from state and sends it to the backend via handleLogin
   * Automatically validates and handles errors through the auth context
   * @function
   * @returns {void}
   */
  const handleLoginSubmit = () => {
    handleLogin({ email: loginState.email, password: loginState.password });
  };

  return {
    loginState,
    loginDispatch,
    handleLoginSubmit,
  };
};

export default useLoginContent;
