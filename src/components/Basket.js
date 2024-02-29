function Basket() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="basket">

                <div className="d-flex justify-between">
                    <h2 className="mb-30">Einkaufswagen</h2>
                    <img className="removeBtn mr-15" src="/img/close.svg" alt="Remove" />
                </div>

                <div className="items">
                    <div className="cartItem mb-20 d-flex align-center">
                        <img className="mr-20" width={80} height={70} src="/img/pictures/01.jpg" alt="Bild1" />
                        <div className="mr-20">
                            <p className="mb-5">Der schönste Wasserfall</p>
                            <b>99 Euro</b>
                        </div>
                        <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
                    </div>

                    <div className="cartItem mb-20 d-flex align-center">
                        <img className="mr-20" width={80} height={70} src="/img/pictures/01.jpg" alt="Bild1" />
                        <div className="mr-20">
                            <p className="mb-5">Der schönste Wasserfall</p>
                            <b>99 Euro</b>
                        </div>
                        <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
                    </div>

                    <div className="cartItem mb-20 d-flex align-center">
                        <img className="mr-20" width={80} height={70} src="/img/pictures/01.jpg" alt="Bild1" />
                        <div className="mr-20">
                            <p className="mb-5">Der schönste Wasserfall</p>
                            <b>99 Euro</b>
                        </div>
                        <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>MwSt. 19%</span>
                            <div></div>
                            <b>18,81 Euro</b>
                        </li>
                        <li>
                            <span>Gesamt inkl. MwSt:</span>
                            <div></div>
                            <b>99 Euro</b>
                        </li>
                    </ul>
                    <div>
                        <button className="greenButton">Bestellung abschließen<img src="/img/arrow.svg" alt="Arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basket;