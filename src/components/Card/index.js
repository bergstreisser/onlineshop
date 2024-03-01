import styles from './Card.module.scss';

console.log(styles);

function Card(props) {

    return (
        <div className={styles.card}>
            <img className={styles.btnUnliked} onClick={props.onLikeClick} src="/img/heart-unliked.png" alt="Unliked" />
            <img width={155} height={135} src={props.url} alt="Bild1" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Preis: </span>
                    <b>{props.price}</b>
                </div>
                <button className="button" onClick={props.onAddClick}>
                    <img className="btn-img" src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;