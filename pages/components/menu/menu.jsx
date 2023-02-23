import React from "react";
import s from "./menu.module.scss";
import { CgMail } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";

const Menu = () => {
    return (
        <div className={s.block}>
            <div className={s.menu}>
                <div className={s.a}>
                    <a href="#">Каталог</a>
                    <a href="#">Акции</a>
                    <a href="#">Популярные товары</a>
                    <a href="#">Новинки</a>
                    <a href="#">Новости</a>
                    <a href="#">О компании</a>
                    <a href="#">Контакты</a>
                </div>
                <div className={s.menu_block2}>
                    <a type="email" href=" mailto:info@Kanzler.kg" className={s.email}><CgMail className={s.CgMail} />info@Kanzler.kg</a>
                    <a type="tel" href="tel:+6494461709" className={s.tel}><BsTelephoneFill className={s.BsTelephone} />Позвонить </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;
