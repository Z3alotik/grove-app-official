import axios from "axios";
import { useEffect, useReducer } from "react";
import { useSnackbar } from "../../../../../../../stateManagement/SnackbarProvider";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const useRegisterContent = () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });

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

  const [state, dispatch] = useReducer(reducer, initialState);
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    console.log("State has been updated:", state);
  }, [state]);

  const handleRegister = async (e: any) => {
    e.preventDefault();

    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
    };

    console.log("New user to register:", newUser);

    try {
      const response = await api.post("/auth/register", newUser);
      if (response.status === 201) {
        showSnackbar("Registrace proběhla úspěšně", "success");
      } else {
        showSnackbar("Registrace se nevydařila", "error");
      }
    } catch (error) {
      showSnackbar("Something went wrong!", "error");
      console.error(error);
    }
  };

  return {
    state,
    dispatch,
    handleRegister,
  };
};

export default useRegisterContent;
