import React from 'react'
import AppContext from '../context';

const Info = ({ title, description, image }) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="d-flex flex-column flex">
            <div className="cartEmptyBlock">
                <img className="empty-basket" src={image} alt="empty-basket" />
                <ul>
                    <li>
                        <h2>{title}</h2>
                    </li>
                    <li>
                        <p>{description}</p>
                    </li>
                </ul>
            </div>
            <div>
                <button onClick={() => setCartOpened(false)} className="backBtn">Zurück zur Übersicht</button>
            </div>
        </div>
    )
}

export default Info;