import React from 'react';
import Info from './Info';
import axios from 'axios';
import { useCart } from '../hooks/useCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Basket({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems, tax, priceIncTax } = useCart();
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart/${item.id}`);
                await delay(1000);
            }

        } catch (error) {
            alert('Bestellung konnte nicht ausgeführt werden');
        }
        setIsLoading(false);
    }

    return (
        <div className="overlay">
            <div className="basket">

                <div className="d-flex justify-between">
                    <h2 className="mb-30">Einkaufswagen</h2>
                    <img onClick={onClose} className="closeBtn mr-15" src="img/close.svg" alt="Remove" />
                </div>

                {
                    items.length > 0 ? (

                        <div className="d-flex flex-column flex">
                            <div className="items">
                                {items.map((item) => (
                                    <div key={item.id} className="cartItem mb-20 d-flex">
                                        <img className="mr-20" width={120} height={70} src={item.url} alt={item.alt} />

                                        <div className="cardPos d-flex justify-between align-center">
                                            <div className="d-flex flex-column">
                                                <span>{item.title}</span>
                                                <b>{item.price} Euro</b>
                                            </div>
                                            <img onClick={() => onRemove(item.id)} className="removeBtn" src="img/remove.svg" alt="Remove" />
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>MwSt. 19%</span>
                                        <div></div>
                                        <b>{tax.toFixed(2)} Euro</b>
                                    </li>
                                    <li>
                                        <span>Gesamt inkl. MwSt:</span>
                                        <div></div>
                                        <b>{priceIncTax.toFixed(2)} Euro</b>
                                    </li>
                                </ul>
                                <div>
                                    <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Bestellung abschließen<img src="img/arrow.svg" alt="Arrow" /></button>
                                </div>
                            </div>
                        </div>

                    ) : (
                        <Info
                            title={isOrderComplete ? "Bestellung abgeschlossen!" : "Der Einkaufswagen ist leer"}
                            description={isOrderComplete ? "Ihre Bestellung wird zum Versenden vorbereitet ( natürlich nicht wirklich :-) )" : "Bitte fügen Sie wenigstens ein Artikel hinzu"}
                            image={isOrderComplete ? "img/order.png" : "img/empty-basket.svg"}
                        />
                    )
                }

            </div>
        </div>
    );
}

export default Basket;