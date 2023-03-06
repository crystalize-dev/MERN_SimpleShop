import React from 'react';
import cl from "./shopItem.module.css";
import Icon from "../icon/icon";


const ShopItem = ({src, price, name}) => {
    return (
        <div className={cl.card}>
            <h1>{name}</h1>

            <img alt={"product_img"} src={src} draggable={false}/>

            <div className={cl.buttonsArea}>
                <p>{price + " $"}</p>
                <Icon>shopping_cart</Icon>
            </div>
        </div>
    );
};

export default ShopItem;