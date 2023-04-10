import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import { iApiError, iLoginFormData, iRegisterFormData, iUser, iUserContext, iUserProviderProps } from "./types";
import { ContactsContext } from "../contacts/ContactsContext";

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
                setContacts(data.contacts);
              } catch (error) {
                const requestError = error as AxiosError<iApiError>;
                console.log(requestError);
              }
            }
            setLoading(false);
          }

          loadUser();
    }, [setContacts]);

    async function registerUser(data: iRegisterFormData):Promise<void> {
        try {
          const response = await api.post<iUser>("/users/", data);
          console.log("oi",response);
          navigate("/login", { replace: true });
        } catch (error) {
          console.log(error);
        }
      }
    
      async function loginUser(data: iLoginFormData):Promise<void> {
        try {
          const response = await api.post("/login", data);
    
          setUser(response.data.user);
          console.log("response", response)
          localStorage.setItem("FPToken", response.data.tokenUser);
          // localStorage.setItem("authUserId", response.data.user.id);
          navigate("/home", { replace: true });
        } catch (error) {
          console.log("testedologin")
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
