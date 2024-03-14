import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Basket from './components/Basket';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://65e5b5d4d7f0758a76e7220e.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onAddFavorite = (obj) => {
    axios.post('/data/db.json', obj);
    setFavorites(prev => [...prev, obj]);
  }

  const onRemoveFavorite = (id) => {
    axios.delete(`https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {/* wenn cartOpened ist true, dann wird Basket abgebildet */}
      {cartOpened && <Basket items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route exact path="/">
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddFavorite={onAddFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route exact path="/Favorites">
        <Favorites 
        
        />
      </Route>

    </div>
  );
}

export default App;
