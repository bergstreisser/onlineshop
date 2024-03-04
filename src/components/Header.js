function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">

            <div className="d-flex align-center">
                <img alt="logo" width={65} height={55} src="/img/logo.jpg" />
                <div className="headerInfo">
                    <h3 className="text-uppercase">Die schönsten Bilder</h3>
                    <p className="opacity-5">Hier kannst du Bilder kaufen...</p>
                </div>
            </div>

            <ul className="d-flex">
                <li className="cart">
                    <img onClick={props.onClickCart} alt="cart" width={20} height={20} src="/img/cart.svg" />
                </li>
                <li>
                    <img alt="heart" width={20} height={20} src="/img/heart-liked.png" />
                </li>
                <li>
                    <img alt="user" width={20} height={20} src="/img/user.svg" />
                </li>
            </ul>
 
        </header>
    );
}

export default Header;