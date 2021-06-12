import React, {useEffect, useState} from 'react';

import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';

const Main = (props) => {

    return(
        <div>
            <Nav logoutFunc={props.LogoutFunc} />
            <Content dummy={props.dummy}/>
            <Footer/>
        </div>
    ) 
}

export default Main;