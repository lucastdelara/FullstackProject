import { AxiosError } from "axios";
import { useContext } from "react";
import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { iContact, ContactsContext } from "./ContactsContext";

// import api from "../services/api";

export interface iUserProviderProps {
    children: ReactNode;
}

// export interface iApiError {
//     status?: string;
//     message?: string | [];
// }

export interface iRegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    contact: string;
    register_date: string;
}

export interface iLoginFormData {
    email: string;
    password: string;
}

export interface iUser {
    id: string;
    name: string;
    email: string;
    contact: string;
    register_date: string;
}

export interface iModal {
    title: string;
    status: string;
}

export interface iUserContext {
    registerUser: (data: iRegisterFormData) => Promise<void>;
    token: string | null;
    user: iUser | null;
    loginUser: (data: iLoginFormData) => Promise<void>;
    loading: boolean;
    invisibleModal: boolean;
    setInvisibleModal: Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
    const [user, setUser] = useState<iUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [invisibleModal, setInvisibleModal] = useState(false);
    const [token, setToken] = useState(
      localStorage.getItem("FPToken") || null
    );

    const { setContacts } = useContext(ContactsContext);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("FPToken");
            setToken(token);
      
            if (token) {
              try {
                api.defaults.headers.authorization = `Bearer ${token}`;
                const { data } = await api.get("/profile");
                setUser(data);
                setContacts(data.techs);
              } catch (error) {
                const requestError = error as AxiosError<iApiError>;
                console.log(requestError);
              }
            }
            setLoading(false);
          }

          loadUser();
    }, [setContacts]);

    async function registerUser(data: iRegisterFormData) {
        try {
          const response = await api.post("/users", data);
          console.log(response);
    
          const { user: userResponse, token } = response.data;
    
          api.defaults.headers.authorization = `Bearer ${token}`;
    
          setUser(userResponse);
    
          localStorage.setItem("FPToken", token);
    
          navigate("/home", { replace: true });
        } catch (error) {
          console.log(error);
        }
      }
    
      async function loginUser(data: iLoginFormData) {
        try {
          const response = await api.post("/sessions", data);
    
          setUser(response.data.user);
    
          localStorage.setItem("FPToken", response.data.token);
          localStorage.setItem("authUserId", response.data.user.id);
          navigate("/home", { replace: true });
        } catch (error) {
          console.error(error);
        }
      }
    
      return (
        <UserContext.Provider
          value={{
            user,
            token,
            loginUser,
            registerUser,
            loading,
            invisibleModal,
            setInvisibleModal,
          }}
        >
          {children}
        </UserContext.Provider>
      );
}
