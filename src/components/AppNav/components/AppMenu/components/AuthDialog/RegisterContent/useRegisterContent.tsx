import { useReducer } from "react";
import { useAuth } from "../../../../../../../stateManagement/AuthProvider";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const useRegisterContent = () => {
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

  const { handleRegister } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRegisterSubmit = (e: any) => {
    e.preventDefault();

    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
    };

    handleRegister(newUser);
  };

  return {
    state,
    dispatch,
    handleRegisterSubmit,
  };
};

export default useRegisterContent;
