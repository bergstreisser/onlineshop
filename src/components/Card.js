function Card() {
    return (
        <div className="card">
            <img className="btn-unliked" src="/img/heart-unliked.png" alt="Unliked" />
            <img width={155} height={135} src="/img/pictures/01.jpg" alt="Bild1" />
            <h5>Der schönste Wasserfall</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Preis: </span>
                    <b>99 Euro</b>
                </div>
                <button className="button">
                    <img className="btn-img" src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;