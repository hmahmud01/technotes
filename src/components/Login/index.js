import React from 'react';

const Login = (props) => {
    const loginHandle = (event) => {
        event.preventDefault();
        let username = document.getElementById("username").value;
        props.loginFunc(username);
    }
    return(
        <div>
            <div className="h-100 uk-background-primary uk-dark uk-padding uk-panel">
                <div className="uk-position-center uk-overlay uk-overlay-secondary">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-card-title">Login</h3>
                        <p className="uk-article-meta">Signup With Your Email Please</p>
                        <form className="uk-form-stacked">
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="username">Your Email</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input uk-form-width-large" id="username" type="email" placeholder="Email" />
                                </div>                        
                            </div>       

                            <div className="uk-margin">
                                <button className="uk-button uk-button-secondary uk-width-1-1" type="button" onClick={loginHandle}>Login</button>         
                            </div>                    
                        </form>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default Login;