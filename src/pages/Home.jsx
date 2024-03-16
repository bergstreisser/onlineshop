import React from 'react';
import Card from '../components/Card';
import Data from '../data/db.json';

function Home({  
    cartItems,
    searchValue, 
    setSearchValue, 
    onChangeSearchInput, 
    onAddFavorite, 
    onAddToCart 
}) {

    return (
        <div className="content p-40">

            <div className="d-flex mb-40 align-center justify-between">
                <h1>{searchValue ? `Suche nach: "${searchValue}"` : 'Alle Bilder'}</h1>
                <div className="search-block d-flex">
                    <img className="searchIcon" src="/img/search.svg" alt="Search" />
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="suchen... " />
                    {searchValue && <img onClick={() => setSearchValue('')} className="closeSearchBtn" src="/img/close.svg" alt="Close" />}
                </div>
            </div>

            <div className="d-flex flex-wrap">
                {
                    //map rendert so oft, wieviel Elemente in items sind
                    //index ist notwendig, wenn ein Element gelöscht werden muss 
                    Data.filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
                        .map((item, index) => (
                            <Card
                                key={index}
                                onLike={(item) => onAddFavorite(item)}
                                onPlus={(item) => onAddToCart(item)}
                                addedToCart={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                                { ...item }
                            />
                        ))
                }
            </div>

        </div>
    );
}

export default Home;