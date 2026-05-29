import { useReducer } from "react";
import { useAuth } from "../../../../../../../stateManagement/AuthState/AuthProvider";

/**
 * Initial state object for user registration form
 * Contains empty string values for all registration fields
 * @type {Object}
 * @property {string} name - User's full name
 * @property {string} email - User's email address
 * @property {string} password - User's password
 */
const initialState = {
  name: "",
  email: "",
  password: "",
};

/**
 * Reducer function to manage registration form state
 * Handles different action types to update specific form fields or reset the entire state
 * @function
 * @param {Object} state - Current state object containing registration form data
 * @param {Object} action - Dispatch action object
 * @param {string} action.type - Action type (setName, setEmail, setPassword, resetState)
 * @param {any} action.payload - Value to update in state (optional, not used for resetState)
 * @returns {Object} Updated state object
 * @throws {Error} If action type is not recognized
 * @example
 * dispatch({ type: "setName", payload: "John Doe" });
 * dispatch({ type: "setEmail", payload: "john@example.com" });
 * dispatch({ type: "resetState" });
 */
const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
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
 * Custom hook for managing user registration form state and submission
 * Handles form validation and API communication for user registration
 * @function
 * @returns {Object} Hook return object
 * @returns {Object} return.registerState - Current registration form state containing name, email, and password
 * @returns {Function} return.registerDispatch - Reducer dispatch function to update form state
 * @returns {Function} return.handleRegisterSubmit - Form submission handler
 * @example
 * const { registerState, registerDispatch, handleRegisterSubmit } = useRegisterContent();
 *
 * // Update a form field
 * registerDispatch({ type: "setName", payload: "John Doe" });
 * registerDispatch({ type: "setEmail", payload: "john@example.com" });
 *
 * // Submit the form
 * handleRegisterSubmit();
 */
const useRegisterContent = () => {
  const { handleRegister } = useAuth();
  const [registerState, registerDispatch] = useReducer(reducer, initialState);

  /**
   * Handles user registration form submission
   * Extracts form data from state and sends it to the backend via handleRegister
   * Automatically validates and handles errors through the auth context
   * @function
   * @returns {void}
   */
  const handleRegisterSubmit = () => {
    handleRegister({
      name: registerState.name,
      email: registerState.email,
      password: registerState.password,
    });
  };

  return {
    registerState,
    registerDispatch,
    handleRegisterSubmit,
  };
};

export default useRegisterContent;
