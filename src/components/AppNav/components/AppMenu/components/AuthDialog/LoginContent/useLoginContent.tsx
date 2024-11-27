import { useReducer } from "react";
import { useAuth } from "../../../../../../../stateManagement/AuthProvider";

const useLoginContent = () => {
  const { handleLogin } = useAuth();

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
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();

    const credentials = {
      email: state.email,
      password: state.password,
    };

    handleLogin(credentials);
  };

  return {
    state,
    dispatch,
    handleLoginSubmit,
  };
};

export default useLoginContent;
