
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


initializeFirebase()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, history) => {
        
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
    }
    return {
        signInWithGoogle
    }
};

export default useFirebase;