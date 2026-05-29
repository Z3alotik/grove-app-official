import { CredentialProps } from "../stateManagement/AuthState/AuthProvider.types";
import { api } from "./api";

export const handleLoginRequest = (credentials: CredentialProps) => {
  return api.post("/auth/login", credentials);
};
