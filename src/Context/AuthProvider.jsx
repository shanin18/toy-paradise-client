import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, displayName, photoURL)=>{
    setLoading(true)
    return updateProfile(user, {displayName,photoURL});
  };

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    })

    return ()=>{
        unsubscribe()
    }
  },[])

  const authInfo = {
    createUser,
    updateUserProfile,
    user,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
