import Basket from './components/Basket';
import Card from './components/Card';
import Header from './components/Header';

const arr = [
  {
    title: 'sdfdsfdsfdsfdsf',
    price: 25,
    url: '/img/pictures/01.jpg'
  },
  {
    title: 'sdfdsfdsfdsfdsf',
    price: 25,
    url: '/img/pictures/02.jpg'
  },
  {
    title: 'sdfdsfdsfdsfdsf',
    price: 25,
    url: '/img/pictures/03.jpg'
  },
  {
    title: 'sdfdsfdsfdsfdsf',
    price: 25,
    url: '/img/pictures/04.jpg'
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Basket />
      <Header />

      <div className="content p-40">

        <div className="d-flex mb-40 align-center justify-between">
          <h1>Alle Bilder</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="suchen... " />
          </div>
        </div>

        <div className="d-flex">
          {
            arr.map((obj) => (
              <Card
                title = {obj.title}
                price = {obj.price}
                url = {obj.url}
                onLikeClick = {() => alert(12345)}
                onAddClick = {() => alert(1234)} 
              />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
