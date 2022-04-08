import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
//actual value to access
export const UserContext = createContext({
    currentUser: null,
    setCurrent: () => null
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    
    return<UserContext.Provider value={value}>{children}</UserContext.Provider>
}