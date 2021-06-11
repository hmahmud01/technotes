import React, {useEffect, useState} from 'react';
import Login from './Login';
import Main from './Main/Main';


const MainApp = () => {
    const [loggedIn, setLoggedIn] = useState();

    const logIn = (username) => {
        var auth_url = "https://technotes-api.herokuapp.com/api/v1/auth";
        var data = {
            mail: username
        }
        fetch(auth_url, {
            method: 'post',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            const user = {
                username : username,
                data : data
            }            
            localStorage.setItem("user", JSON.stringify(user));
            setLoggedIn(true);
        });
    }



    const user = localStorage.getItem("user");   

    // const comp = () => {
    //     if (user) {
    //         return <Main />
    //     }else {
    //         return <Login loginFunc={logIn}/>
    //     }
    // }

    const logout = () => {
        setLoggedIn(false);
    }



    // const comp = jwt_token ? <Main LogoutFunc /> : <Login loginFunc={logIn} />;

    const comp = user ? <Main LogoutFunc = {logout} /> : <Login loginFunc={logIn} />;

    return (
        <div>
            {comp}
        </div>
    );
}

export default MainApp;