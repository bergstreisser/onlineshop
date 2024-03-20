import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favorites({
    onRemoveFavorite,
    onAddToCart
}) {

    const { favorites } = React.useContext(AppContext);

    return (
        <div className="content p-40">

            <h1 className="mb-40">Favorites</h1>
            <div className="d-flex flex-wrap">
                {
                favorites.map((item, index) => (
                        <Card
                            key={index}
                            onLike={(obj) => onRemoveFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            isFavorited={true}
                            { ...item }
                        />
                    ))
                }
            </div>
            
        </div>
    );
}

export default Favorites;