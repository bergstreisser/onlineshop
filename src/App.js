import Basket from './components/Basket';
import Card from './components/Card';
import Header from './components/Header';

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

        <div className="d-flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </div>
  );
}

export default App;
