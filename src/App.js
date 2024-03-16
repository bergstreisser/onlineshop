import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Basket from './components/Basket';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://65e5b5d4d7f0758a76e7220e.mockapi.io/favorites');

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, data]);
      }
    } catch (error) {
      alert('hinzufügen nicht geklappt...')
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onAddFavorite = async (obj) => {
    try {
      const { data } = await axios.post(`https://65e5b5d4d7f0758a76e7220e.mockapi.io/favorites/`, obj)
      setFavorites(prev => [...prev, data]);
    } catch (error) {
      alert('hinzufügen nicht geklappt...')
    }
  }

  const onRemoveFavorite = (obj) => {
    if (favorites.find(favObj => favObj.id === obj.id)) {
      axios.delete(`https://65e5b5d4d7f0758a76e7220e.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    }
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
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddFavorite={onAddFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route exact path="/Favorites">
        <Favorites
          favorites={favorites}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

    </div>
  );
}

export default App;
