import React from 'react';
import Data from '../data/db.json';
import Card from '../components/Card';

function Favorites({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddFavorite,
    onAddToCart
}) {

    return (
        <div className="content p-40">

            <h1 className="mb-40">Favorites</h1>
            <div className="d-flex flex-wrap">
                {
                    Data.map(item => (
                        <Card
                            title={item.title}
                            price={item.price}
                            url={item.url}
                            alt={item.alt}
                        />
                    ))
                }
            </div>


        </div>
    );
}

export default Favorites;