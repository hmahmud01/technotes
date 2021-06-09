import React from 'react'

const Login = (props) => {
    return(
        <div>
            <div class="h-100 uk-background-primary uk-dark uk-padding uk-panel">
                <div class="uk-position-center uk-overlay uk-overlay-secondary">
                    <div class="uk-card uk-card-default uk-card-body">
                        <h3 class="uk-card-title">Login</h3>
                        <p class="uk-article-meta">Signup With Your Email Please</p>
                        <form class="uk-form-stacked">
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Your Email</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input uk-form-width-large" id="form-stacked-text" type="email" placeholder="Email" />
                                </div>                        
                            </div>       

                            <div class="uk-margin">
                                <button class="uk-button uk-button-secondary uk-width-1-1" type="button" onClick={props.loginFunc}>Login</button>         
                            </div>                    
                        </form>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default Login;