import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Basket from './components/Basket';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import data from './data/db.json';
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const cartResponse = await axios.get('https://65e5b5d4d7f0758a76e7220e.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://65e5b5d4d7f0758a76e7220e.mockapi.io/favorites');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(data);
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

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, setCartOpened }}>
      <div className="wrapper clear">
        {/* wenn cartOpened ist true, dann wird Basket abgebildet */}
        {cartOpened && <Basket items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(true)} />

        <Route exact path="/">
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={searchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddFavorite={onAddFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>
        <Route exact path="/Favorites">
          <Favorites
            onAddFavorite={onAddFavorite}
            onRemoveFavorite={onRemoveFavorite}
            onAddToCart={onAddToCart}
          />
        </Route>

      </div>
    </AppContext.Provider>
  );
}

export default App;
