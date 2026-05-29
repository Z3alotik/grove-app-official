import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

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
import { handleFetchUserRequest } from "../../api/handle-fetch-user";
import { handleLoginRequest } from "../../api/handle-login";
import { handleRegisterRequest } from "../../api/handle-register";

/**
 * Authentication context for managing auth state across the application
 * @type {React.Context<AuthContextType | undefined>}
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider component that manages authentication state and provides auth methods
 * Handles user login, registration, logout, token validation and role-based access control
 * @component
 * @param {AuthProviderProps} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider
 * @returns {React.ReactElement} The provider component with auth context
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { showSnackbar } = useSnackbar();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [openAuthDialog, setOpenAuthDialog] = useState(false);

  /**
   * Handles logout of the current user
   * Removes JWT token from localStorage, clears state and shows confirmation message
   * @function
   * @async
   * @returns {void}
   */
  const handleLogout = useCallback(() => {
    showSnackbar("Byl/a si odhlášen/a", "info");
    localStorage.removeItem("jwtToken");
    setToken("");
    setUser(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Fetches and updates logged-in user data from the backend
   * On failure, logs out the user and clears auth state
   * @async
   * @function
   * @param {string} jwtToken - JWT token for authentication
   * @returns {Promise<void>}
   */
  const handleFetchUser = useCallback(
    async (jwtToken: string) => {
      try {
        const response = await handleFetchUserRequest(jwtToken);
        setUser(response.data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        handleLogout();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleLogout],
  );

  /**
   * Effect hook that initializes authentication on component mount
   * Retrieves saved JWT token from localStorage, validates expiration, and fetches user data
   * @function
   * @returns {void}
   */
  useEffect(() => {
    const savedToken = localStorage.getItem("jwtToken");
    if (savedToken) {
      if (isTokenExpired(savedToken)) {
        showSnackbar("Byl jsi odhlášen, přihlas se znovu", "warning");
        handleLogout();
      }
      setToken(savedToken);
      handleFetchUser(savedToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleFetchUser]);

  /**
   * Authenticates user with provided credentials
   * On success, saves token to localStorage, updates state and closes auth dialog
   * On failure, displays appropriate error messages
   * @async
   * @function
   * @param {CredentialProps} credentials - Login credentials (email/username and password)
   * @returns {Promise<void>}
   */
  const handleLogin = async (credentials: CredentialProps) => {
    try {
      const response = await handleLoginRequest(credentials);
      const { accessToken } = response.data;
      showSnackbar("Přihlášení proběhlo úspěšně", "success");
      localStorage.setItem("jwtToken", accessToken);
      setToken(accessToken);
      handleFetchUser(accessToken);
      handleCloseAuthDialog();
    } catch (err) {
      if (err) {
        handleLoginErrors(err);
      } else {
        showSnackbar("Přihlášení se nevydařilo", "error");
        console.error(err);
      }
    }
  };

  /**
   * Registers a new user account with provided user data
   * On success, switches form to login view
   * On failure, displays appropriate error messages
   * @async
   * @function
   * @param {UserDTO} newUser - User registration data (email, password, name, etc.)
   * @returns {Promise<void>}
   */
  const handleRegister = async (newUser: UserDTO) => {
    try {
      await handleRegisterRequest(newUser);
      showSnackbar("Registrace proběhla úspěšně", "success");
      handleChangeAuthContent();
    } catch (err) {
      if (err) {
        handleRegisterErrors(err);
      } else {
        showSnackbar("Registrace se nevydařila", "error");
        console.error(err);
      }
    }
  };

  /**
   * Handles errors from user registration
   * Shows appropriate error message based on HTTP status code
   * @function
   * @param {any} error - Error object from the failed registration request
   * @param {number} error.response.status - HTTP status code
   * @param {any} error.response.data - Error response data
   * @returns {void}
   */
  const handleRegisterErrors = (error: any) => {
    switch (error.response.status) {
      case 409:
        return showSnackbar(
          "Uživatel s tímto emailem/jménem už existuje",
          "error",
        );
      case 400:
        return handleFieldValidation(error.response.data);
    }
  };

  /**
   * Handles errors from user login
   * Shows appropriate error message based on HTTP status code
   * @function
   * @param {any} error - Error object from the failed login request
   * @param {number} error.response.status - HTTP status code
   * @param {any} error.response.data - Error response data
   * @returns {void}
   */
  const handleLoginErrors = (error: any) => {
    switch (error.response.status) {
      case 401:
        return showSnackbar("Přihlašovací údaje jsou nesprávné", "error");
      case 400:
        return handleFieldValidation(error.response.data);
    }
  };

  /**
   * Displays validation error messages for form fields
   * Iterates through error data object and shows each field error as a warning snackbar
   * @function
   * @param {any} errorData - Object containing field-level validation errors
   * @returns {void}
   */
  const handleFieldValidation = (errorData: any) => {
    Object.entries(errorData).forEach((value) => {
      showSnackbar(`${value[1]}`, "warning");
    });
  };

  /**
   * Toggles between login and register form views
   * @function
   * @returns {void}
   */
  const handleChangeAuthContent = () => {
    setIsLogin((prev) => !prev);
  };

  /**
   * Opens the authentication dialog
   * @function
   * @returns {void}
   */
  const handleOpenAuthDialog = () => {
    setOpenAuthDialog(true);
  };

  /**
   * Closes the authentication dialog
   * @function
   * @returns {void}
   */
  const handleCloseAuthDialog = () => {
    setOpenAuthDialog(false);
  };

  /**
   * Checks if the current user has a specific role
   * Useful for role-based access control and conditional rendering
   * @function
   * @param {string} role - Name of the role to check (e.g., "ADMIN", "USER")
   * @returns {boolean} True if user has the specified role, false otherwise
   * @example
   * if (hasRole("ADMIN")) {
   *   // Show admin controls
   * }
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

/**
 * Hook to use the AuthContext
 * Provides access to authentication state and methods
 * Must be used within an AuthProvider component
 * @function
 * @returns {AuthContextType} The auth context value containing auth state and methods
 * @throws {Error} If used outside of AuthProvider
 * @example
 * const { user, handleLogin, handleLogout, hasRole } = useAuth();
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
