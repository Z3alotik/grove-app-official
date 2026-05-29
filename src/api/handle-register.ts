import { UserDTO } from "../stateManagement/AuthState/AuthProvider.types";
import { api } from "./api";

export const handleRegisterRequest = (newUser: UserDTO) => {
  return api.post("/auth/register", newUser);
};
