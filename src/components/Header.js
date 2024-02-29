function Header() {
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
                <li className="mr-30">
                    <img alt="cart" width={18} height={18} src="/img/cart.svg" />
                    <span>12 Euro</span>
                </li>
                <li>
                    <img alt="user" width={18} height={18} src="/img/user.svg" />
                </li>
            </ul>

        </header>
    );
}

export default Header;