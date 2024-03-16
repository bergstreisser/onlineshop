import React from 'react';
import styles from './Card.module.scss';

function Card({ id, title, url, alt, price, onLike, onPlus, isFavorited = false, addedToCart = false }) {
    const [isAdded, setIsAdded] = React.useState(addedToCart);
    const [isLiked, setIsLiked] = React.useState(isFavorited);

    const onClickPlus = () => {
        onPlus({ id, title, url, alt, price });
        setIsAdded(!isAdded);
    }

    const onClickLike = () => {
        onLike({ id, title, url, alt, price });
        setIsLiked(!isLiked);
    }

    return (
        <div className={styles.card}>
            <img className={styles.btnUnliked} onClick={onClickLike} src={isLiked ? "/img/heart-liked.png" : "/img/heart-unliked.png"} alt="Unliked" />
            <img width={155} height={135} src={url} alt={alt} />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Preis: </span>
                    <b>{price} Euro</b>
                </div>
                <div>
                    <img className={styles.btnPlus} onClick={onClickPlus} src={isAdded ? "/img/checked.svg" : "/img/plus.svg"} alt="Plus" />
                </div>
            </div>
        </div>
    );
}

export default Card;