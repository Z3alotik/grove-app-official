import { useReducer } from "react";
import { useSnackbar } from "../../../../../../../stateManagement/SnackbarProvider";
import axios from "axios";

const useLoginContent = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

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
  const { showSnackbar } = useSnackbar();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const userObj = {
      email: state.email,
      password: state.password,
    };

    const response = await api.post("/auth/login", userObj);
    if (response.status === 200) {
      showSnackbar("Přihlášení proběhlo úspěšně, vítej", "success");
      localStorage.setItem("jwtToken", response.data.accessToken);
    } else {
      showSnackbar("Přihlášení se nevydařilo", "error");
    }
  };

  const handleLogout = async (e: any) => {
    e.preventDefault();
  };

  return {
    state,
    dispatch,
    handleLogin,
  };
};

export default useLoginContent;
