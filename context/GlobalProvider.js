import { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "../lib/appwrite.js";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
        .then((res) => {
            if (res) {
                setIsLogged(true);
                setUser(res);
            } else {
                setIsLogged(false)
                setUser(null);
            }
        })
        .catch((error) => {
            console.log(error);
            console.log("Error fetching user:", error.message);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return (
       <GlobalContext.Provider
       value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
       }}
       >
        {children}
       </GlobalContext.Provider>
    );
};

export default GlobalProvider;