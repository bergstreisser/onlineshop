import React from 'react';
import Basket from './components/Basket';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://65e5b5d4d7f0758a76e7220e.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {/* wenn cartOpened ist true, dann wird Basket abgebildet */}
      {cartOpened && <Basket items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

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
            items.filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                url={item.url}
                alt={item.alt}
                onLike={() => console.log('test')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
