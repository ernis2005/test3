import React from 'react'
import s from './style.module.scss'
import { CgMail } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={s.herder}>
       <div className={s.block}>
 <h1>Kanzler&Bürger</h1>
 <div className={s.menu}>
 <div className={s.block1}>
            <div className={s.menu2}>
                
                <div className={s.a}>
                <p >Меню</p>
                    <a href="#">Каталог</a>
                    <a href="#">Акции</a>
                    <a href="#">Популярные товары</a>
                    <a href="#">Новинки</a>
                    <a href="#">Новости</a>
                    <a href="#">О компании</a>
                    <a href="#">Контакты</a>
                </div>
            </div>
        </div>
        <div className={s.block1}>
            <div className={s.menu2}>
                
                <div className={s.a}>
                <p >Категории</p>
                    <a href="#">Каталог</a>
                    <a href="#">Акции</a>
                    <a href="#">Популярные товары</a>
                    <a href="#">Новинки</a>
                    <a href="#">Новости</a>
                    <a href="#">О компании</a>
                    <a href="#">Контакты</a>
                    <a href="#">Lorem.</a>
                    <a href="#">Новости</a>
                    <a href="#">О компании</a>
                    <a href="#">Контакты</a>
                </div>
            </div>
        </div>
        <div className={s.block1}>
            <div className={s.menu2}>
                
                <div className={s.a}>
                <p >Контакты</p>
                    <a href="#">Огонбаева, 222</a>
                    <a href="#">0777 90 22 33</a>
                    <a href="#">0312 90 22 33</a>
                    <a href="#">Эркиндик, 7</a>
                    <a href="#">0777 90 22 34</a>
                    <a href="#">0312 90 22 34</a>
                    <a href="#">Уметалиева, 84</a>
                </div>
            </div>
        </div>
 </div>
 
 <hr
  />
  <div className={s.the}>
    <p>
    Kanzler & Burger (c) 2017. All rights reserved
    </p>
  </div>
       </div>
    </div>
  )
}

export default Footer
