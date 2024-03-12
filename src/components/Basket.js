function Basket({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="basket">

                <div className="d-flex justify-between">
                    <h2 className="mb-30">Einkaufswagen</h2>
                    <img onClick={onClose} className="closeBtn mr-15" src="/img/close.svg" alt="Remove" />
                </div>


                <div className="items">
                    {items.map((item) => (
                        <div className="cartItem mb-20 d-flex">
                            <img className="mr-20" width={120} height={70} src={item.url} alt={item.alt} />

                            <div className="cardPos d-flex justify-between align-center">
                                <div className="d-flex flex-column">
                                    <span>{item.title}</span>
                                    <b>{item.price} Euro</b>
                                </div>
                                <img onClick={() => onRemove(item.id)} className="removeBtn" src="/img/remove.svg" alt="Remove" />
                            </div>

                        </div>
                    ))}
                </div>
                {
                    items.length > 0 ? (
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
                    ) : (

                        <div>
                            <img className="empty-basket" src="/img/empty-basket.svg" alt="empty-basket" />
                            <ul>
                                <li>
                                    <h2>Der Einkaufswagen ist leer</h2>
                                </li>
                                <li>
                                    <p>Bittte fügen Sie wenigstens ein Artikel hinzu!</p>
                                </li>
                            </ul>
                            
                            
                            <div className="cartEmptyBlock">
                                <button onClick={onClose} className="backBtn">Zurück zur Übersicht</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Basket;