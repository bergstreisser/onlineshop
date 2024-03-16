import React from 'react';
import Card from '../components/Card';

function Favorites({
    favorites,
    onRemoveFavorite,
    onAddToCart
}) {

    return (
        <div className="content p-40">

            <h1 className="mb-40">Favorites</h1>
            <div className="d-flex flex-wrap">
                {
                    favorites.map(item => (
                        <Card
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