import React from 'react';
import Card from '../components/Card';

function Favorites({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddFavorite
}) {

    return (
        <div className="content p-40">

            <h1 className="mb-40">Favorites</h1>
            <div className="d-flex flex-wrap">
                {
                    items.map(item => (
                        <Card
                            onLike={(obj) => console.log('Hallo')} //onAddFavorite(obj)}
                            onPlus={(obj) => onAddFavorite(obj)}
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