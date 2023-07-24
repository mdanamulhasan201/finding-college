import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.confiq";

export const AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userUpdate = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {

            displayName: name,
            photoURL: photo,
        })
    };


    const updateAuthData = (email, name, photo) => {
        setUser({ ...user, email: email, displayName: name, photoURL: photo })
    }

  // Update profile data in firebase
  const profileUpdate = (updateName, updatePhoto) => {
    return updateProfile(auth.currentUser, {
        displayName: updateName,
        photoURL: updatePhoto,
    });
};

 // Update profile data in local state from profile edit
 const updateProfileData = (updateName, updatePhoto) => {
    setUser({ ...user, displayName: updateName, photoURL: updatePhoto });
};


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        });

        return () => {
            return unsubscribe()
        }
    })

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        userUpdate,
        updateAuthData,
        profileUpdate,
        updateProfileData
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;