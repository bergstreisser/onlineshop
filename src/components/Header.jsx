import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../hooks/useCart';

function Header(props) {
    const { totalPrice } = useCart();

    return (
        <header className="d-flex justify-between align-center p-40">

            <Link to={"/"}>
                <div className="d-flex align-center">
                    <img alt="logo" width={65} height={55} src="img/logo.jpg" />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">Die schönsten Bilder</h3>
                        <p className="opacity-5">Dies ist ein Testprojekt mit React...</p>
                    </div>
                </div>
            </Link>

            <ul className="d-flex">
                <li className="cart d-flex align-center">
                    <img onClick={props.onClickCart} alt="cart" width={25} height={25} src="img/cart.svg" />
                    <b onClick={props.onClickCart}>{totalPrice.toFixed(2)} Euro</b>
                </li>
                <li className="d-flex align-center ml-10 mt-5">
                    <Link to={"/favorites"}>
                        <img alt="heart" width={27} height={27} src="img/heart-liked.png" />
                    </Link>
                </li>
            </ul>

        </header>
    );
}

export default Header;