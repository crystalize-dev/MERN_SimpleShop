import React from 'react';
import cl from "./header.module.css";
import Icon from "../icon/icon";
import logo from "../../img/icon.png";


const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.logoArea}>
                    <img alt={"logo"} src={logo} draggable={false}/>
                    <h1>Simple Shop</h1>
                </div>

                <div className={cl.buttonsArea}>
                    <Icon>person</Icon>
                    <Icon>shopping_cart</Icon>
                </div>
            </div>
        </header>
    );
};

export default Header;