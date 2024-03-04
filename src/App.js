import React from 'react';
import Basket from './components/Basket';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
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
    if (cartItems.title === obj.title) {

    } else {
      setCartItems(prev => [...prev, obj]);
    }
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Basket items = {cartItems} onClose = {() => setCartOpened(false)} />} 
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">

        <div className="d-flex mb-40 align-center justify-between">
          <h1>Alle Bilder</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="suchen... " />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.map((item) => (
              <Card
                title={item.title}
                price={item.price}
                url={item.url}
                alt={item.alt}
                onLike = {() => console.log('test')}
                onPlus = {(obj) => onAddToCart(obj)}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
