import { useReducer } from "react";
import { useAuth } from "../../../../../../../stateManagement/AuthState/AuthProvider";

const initialState = {
  email: "",
  password: "",
};

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

const useLoginContent = () => {
  const { handleLogin } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Handles login submit
   * @param e
   */
  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    handleLogin({ email: state.email, password: state.password });
  };

  return {
    state,
    dispatch,
    handleLoginSubmit,
  };
};

export default useLoginContent;
