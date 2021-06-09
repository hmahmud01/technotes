import React, {useEffect, useState} from 'react';
import Login from './Login';
import Main from './Main/Main';


const MainApp = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const logIn = () => {
        console.log('checking login index');
        setLoggedIn(true);
    }

    const LogOut = () => {
        console.log('checking logout index');
    }

    const comp = loggedIn ? <Main LogoutFunc = {LogOut} /> : <Login loginFunc={logIn} />;

    return (
        <div>
            {comp}
        </div>
    );
}

export default MainApp;