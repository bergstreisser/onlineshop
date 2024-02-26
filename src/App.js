function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img alt="logo" width={65} height={55} src="/img/logo.jpg" />
          <div className="headerInfo">
            <h3 className="text-uppercase">Die schönsten Bilder</h3>
            <p className="opacity-5">Hier kannst du Bilder kaufen...</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img alt="cart" width={18} height={18} src="/img/cart.svg" />
            <span>12 Euro</span>
          </li>
          <li>
          <img alt="user" width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Alle Bilder</h1>

        <div className="d-flex justify-between">
        <div className="card">
          <img width={155} height={135} src="/img/pictures/01.jpg" alt="Bild1" />
          <h5>Der schönste Wasserfall</h5>  
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Preis: </span>
              <b>99 Euro</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={155} height={135} src="/img/pictures/02.jpg" alt="Bild2" />
          <h5>Der schönste Strand</h5>  
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Preis: </span>
              <b>99 Euro</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={155} height={135} src="/img/pictures/03.jpg" alt="Bild3" />
          <h5>Der Blick nach Oben</h5>  
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Preis: </span>
              <b>99 Euro</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={155} height={135} src="/img/pictures/04.jpg" alt="Bild4" />
          <h5>Die schönsten Bäume</h5>  
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Preis: </span>
              <b>99 Euro</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
