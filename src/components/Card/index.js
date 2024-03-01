import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }

    const onClickLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div className={styles.card}>
            <img className={styles.btnUnliked} onClick={onClickLike} src={isLiked ? "/img/heart-liked.png" : "/img/heart-unliked.png"} alt="Unliked" />
            <img width={155} height={135} src={props.url} alt={props.alt} />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Preis: </span>
                    <b>{props.price} Euro</b>
                </div>
                <img className={styles.btnPlus} onClick={onClickPlus} src={isAdded ? "/img/checked.svg" : "/img/plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;