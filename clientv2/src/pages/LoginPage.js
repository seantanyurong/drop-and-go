import React from 'react';
import DefaultHeader from '../components/ui/DefaultHeader';
import Login from '../components/layout/LoginPage/Login';

const LoginPage = () => {
    return(
        <div>
            <DefaultHeader></DefaultHeader>
            <Login></Login>
        </div>
    );
}

export default LoginPage;