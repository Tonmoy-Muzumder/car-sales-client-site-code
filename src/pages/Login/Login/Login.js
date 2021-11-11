import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
// import  Button  from '@mui/material/Button';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    
    const location = useLocation();
    const history = useHistory();

    const {signInWithGoogle} = useFirebase();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} variant="contained">Google Sign In</button>
        </div>
    );
};

export default Login;