import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export type AuthContextType = {
  user: any;
  token: string;
  handleLogout: () => void;
  handleLogin: (credentials: CredentialProps) => Promise<void>;
  handleRegister: (newUser: UserDTO) => Promise<void>;
  hasRole: (role: string) => boolean | undefined;
  handleChangeAuthContent: () => void;
  handleOpenAuthDialog: () => void;
  handleCloseAuthDialog: () => void;
  isLogin: boolean;
  openAuthDialog: boolean;
};

export type UserDTO = {
  name: string;
  email: string;
  password: string;
};

export type Role = {
  id: number;
  name: string;
};

export type CredentialProps = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  roles: Role[];
};
