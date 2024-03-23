import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({ id, title, url, alt, price, onLike, onPlus, isFavorited = false, loading = false }) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isLiked, setIsLiked] = React.useState(isFavorited);
    const itemObj = { id, parentId: id, title, url, alt, price };

    const onClickPlus = () => {
        onPlus(itemObj);
    }

    const onClickLike = () => {
        onLike(itemObj);
        setIsLiked(!isLiked);
    }

    return (
        <div className={styles.card}>
            {
                loading ? (

                    <ContentLoader
                        speed={2}
                        width={400}
                        height={230}
                        viewBox="0 0 400 230"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <circle cx="139" cy="211" r="15" />
                        <rect x="2" y="204" rx="2" ry="2" width="46" height="5" />
                        <rect x="2" y="219" rx="2" ry="2" width="69" height="6" />
                        <rect x="0" y="0" rx="2" ry="2" width="154" height="130" />
                        <rect x="1" y="154" rx="0" ry="0" width="130" height="17" />
                    </ContentLoader>

                ) : (
                    <>
                        {/* <img className={styles.btnUnliked} onClick={onClickLike} src={isLiked ? "img/heart-liked.png" : "img/heart-unliked.png"} alt="Unliked" /> */}
                        <img width={155} height={135} src={url} alt={alt} />
                        <h5>{title}</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Preis: </span>
                                <b>{price} Euro</b>
                            </div>
                            <div>
                                <img className={styles.btnPlus} onClick={onClickPlus} src={isItemAdded(id) ? "img/checked.svg" : "img/plus.svg"} alt="Plus" />
                            </div>
                        </div>
                    </>
                )}
        </div>

    );
}

export default Card;