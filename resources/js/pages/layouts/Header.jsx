const Header = () => {
    return (
        <header>
        <div className="uk-container uk-flex uk-flex-between uk-flex-middle">
            <div className="header__logo">
               <a href="/">
                    <img src="./images/logo.svg" alt="Sport events" width="150px" />
               </a>
            </div>
        
            <div className="header__search">
                <input type="text" placeholder="событие.." className="uk-input" />
            </div>
        
            <div className="header__menu">
                <ul className="uk-navbar-nav">
                    <li>События</li>
                    <li>Помощь</li>
                    <li>Результаты</li>
                    <li><a href="" uk-icon="icon: camera" uk-tooltip="title: Фотографии"></a></li>
                    <li><a href="" uk-icon="icon: user" uk-tooltip="title: Личный кабинет"></a></li>
                </ul>
            </div>

        </div>
    </header>
    )
}

export default Header;