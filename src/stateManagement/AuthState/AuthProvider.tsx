import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { isTokenExpired } from "../../utility/TokenExp";
import {
  AuthContextType,
  AuthProviderProps,
  CredentialProps,
  Role,
  User,
  UserDTO,
} from "./AuthProvider.types";
import { useSnackbar } from "../SnackbarState/SnackbarProvider";

// Authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { showSnackbar } = useSnackbar();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [openAuthDialog, setOpenAuthDialog] = useState(false);

  const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

  // Fetch logged user data, save JWT token and check if token is expired or not
  useEffect(() => {
    const savedToken = localStorage.getItem("jwtToken");
    if (savedToken) {
      if (isTokenExpired(savedToken)) {
        showSnackbar("Byl jsi odhlášen, přihlas se znovu", "warning");
        handleLogout();
      }
      setToken(savedToken);
      fetchUser(savedToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Fetches logged user data
   * @param jwtToken - JWT token
   */
  const fetchUser = async (jwtToken: string) => {
    try {
      const response = await api.get("/auth/loggedUser", {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });
      setUser(response.data);
    } catch (err) {
      console.error("Failed to fetch user:", err);
      handleLogout();
    }
  };

  /**
   * Sends request to autheticate user via credentials
   * @param credentials - Login credentials
   */
  const handleLogin = async (credentials: CredentialProps) => {
    try {
      const response = await api.post("/auth/login", credentials);
      if (response.status === 200) {
        const { accessToken } = response.data;
        showSnackbar("Přihlášení proběhlo úspěšně", "success");
        localStorage.setItem("jwtToken", accessToken);
        setToken(accessToken);
        fetchUser(accessToken);
        handleCloseAuthDialog();
      } else {
        showSnackbar("Přihlášení se nevydařilo", "error");
      }
    } catch (err) {
      showSnackbar("Something went wrong!", "error");
      throw err;
    }
  };

  /**
   * Sends request to create new user
   * @param {UserDTO} newUser - User object
   */
  const handleRegister = async (newUser: UserDTO) => {
    try {
      const response = await api.post("/auth/register", newUser);
      if (response.status === 201) {
        showSnackbar("Registrace proběhla úspěšně", "success");
        handleChangeAuthContent();
      } else {
        showSnackbar("Registrace se nevydařila", "error");
      }
    } catch (error: any) {
      if (error.response.status === 409) {
        showSnackbar(
          "Uživatel s tímto E-mailem/Jménem už existuje !",
          "warning"
        );
      } else {
        showSnackbar("Something went wrong!", "error");
        console.error(error);
      }
    }
  };

  /**
   * Function for handling logout of users
   */
  const handleLogout = () => {
    showSnackbar("Byl/a si odhlášen/a", "info");
    localStorage.removeItem("jwtToken");
    setToken("");
    setUser(null);
  };

  const handleChangeAuthContent = () => {
    setIsLogin((prev) => !prev);
  };

  const handleOpenAuthDialog = () => {
    setOpenAuthDialog(true);
  };

  const handleCloseAuthDialog = () => {
    setOpenAuthDialog(false);
  };

  /**
   * Helper function for checking users roles
   * @param role - string
   * @returns boolean value
   */
  const hasRole = (role: string) => {
    return user?.roles?.some((r: Role) => r.name === role) || false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleLogin,
        handleRegister,
        handleLogout,
        hasRole,
        handleChangeAuthContent,
        handleOpenAuthDialog,
        handleCloseAuthDialog,
        isLogin,
        openAuthDialog,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Helper function for easier use of event context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
