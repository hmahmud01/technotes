const Nav = (props) => {
    const userData = localStorage.getItem("user");
    const token = JSON.parse(userData);
    const LogOut = () => {        
        console.log('checking logout index');
        localStorage.removeItem("user");
        props.logoutFunc();
    }
    return (
        <div>
            <nav class="uk-navbar-container uk-navbar-tech" data-uk-navbar>
                <div class="uk-navbar-left">
                    <a class="uk-navbar-toggle" type="button" uk-toggle="target: #offcanvas-nav">
                        <span data-uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
                    </a>
                </div>

                <div class="uk-navbar-right">    
                    <ul class="uk-navbar-nav">
                        <li>
                            <a class="uk-navbar-toggle" onClick={LogOut}>
                                <span uk-icon="icon: sign-out"></span> <span class="uk-margin-small-left">{token.username}</span>
                            </a>
                        </li>
                    </ul>    
                </div>    
            </nav>

            <div id="offcanvas-nav" uk-offcanvas="mode: push; overlay: true">
                <div class="uk-offcanvas-bar">
                    <ul class="uk-nav uk-nav-default">
                        <li class="uk-nav-header">Header</li>
                        <li><a href="#"><span class="uk-margin-small-right" data-uk-icon="icon: thumbnails"></span> Home</a></li>
                        <li><a href="#"><span class="uk-margin-small-right" data-uk-icon="icon: table"></span> Add A note</a></li>  
                        <li class="uk-nav-divider"></li>
                    </ul>
                    <div class="uk-position-center uk-padding-small">
                        <a href="#"><span class="uk-margin-small-right" data-uk-icon="icon: sign-out"></span> logout</a>
                    </div>       
                </div>
            </div>
        </div>
    )
}

export default Nav;