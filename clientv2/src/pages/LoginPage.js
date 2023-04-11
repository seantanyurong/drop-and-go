import React from 'react';
import DefaultAdminHeader from '../components/ui/DefaultAdminHeader';
import Login from '../components/layout/LoginPage/Login';

const LoginPage = () => {
    return(
        <div>
            <DefaultAdminHeader></DefaultAdminHeader>
            <Login></Login>
        </div>
    );
}

export default LoginPage;