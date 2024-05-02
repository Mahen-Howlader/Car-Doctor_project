import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);



    function createEmailAndPassword ( email, password){
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    function signWithEamilPassword(email, password){
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

        // observer

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => {
           return unsubscribe()
        }
    },[])

    const info = {user,loading,createEmailAndPassword,signWithEamilPassword}
    return(
    <AuthContext.Provider value={info}  >
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider;