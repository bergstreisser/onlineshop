import React from 'react';
import Card from '../components/Card';

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddFavorite,
    onAddToCart,
    isLoading,
}) {

    const renderItems = () => {
        const filteredItems = items && items.filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()));
        //map rendert so oft, wieviel Elemente in items sind
        //index ist notwendig, wenn ein Element gelöscht werden muss 
        return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
            <Card
                key={index}
                onLike={(item) => onAddFavorite(item)}
                onPlus={(item) => onAddToCart(item)}
                loading={isLoading}
                {...item}
            />
        ));
    }
    return (
        <div className="content p-40">

            <div className="d-flex mb-40 align-center justify-between">
                <h1>{searchValue ? `Suche nach: "${searchValue}"` : 'Alle Bilder'}</h1>
                <div className="search-block d-flex">
                    <img className="searchIcon" src="img/search.svg" alt="Search" />
                    <input maxlength="25" onChange={onChangeSearchInput} value={searchValue} placeholder="suchen... " />
                    {/* {searchValue && <img onClick={() => setSearchValue('')} className="closeSearchBtn" src="img/close.svg" alt="Close" />} */}
                </div>
            </div>

            <div className="d-flex flex-wrap">{renderItems()}</div>

        </div>
    );
}

export default Home;