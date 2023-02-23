import React, { useEffect, useState } from "react";
import s from "./header.module.scss";
import Image from "next/image";
import { HiRectangleGroup } from "react-icons/hi2";
import Posk from "../Posk";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Tablee from "../Table/Table";
import { datadt } from "../../data";
import { Badge, Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
function Header() {
  const [data, setData] = useState(datadt);
  const [price, setPrice] = useState(1);
  const [mapindex, setmapindext] = useState();
  let nadleMapindex = () => {
    let map = data.map((res, index) => index);
    let maps = map[map.length - 1];
    setmapindext(maps);
  };

  function nadlePrice() {
    let ans = 0;
    data.map((item) => (ans += item.priceTotal));
    setPrice(ans);
  }
  useEffect(() => {
    nadleMapindex();
    nadlePrice();
  });
  let deletePost = (res) => {
    const isDelete = window.confirm("Удалить пост?");
    if (isDelete) {
      const updatedPost = data.filter((post) => {
        return post.id !== res;
      });
      setData(updatedPost);
    }
  };
  const quantityInPost = (id) => {
    setData((data) => {
      return data.map((res) => {
        if (res.id === id) {
          return {
            ...res,
            quantity: ++res.quantity,
            priceTotal: ++res.quantity * res.price,
          };
        }
        return res;
      });
    });
  };
  const quantityDePost = (id) => {
    setData((data) => {
      return data.map((res) => {
        if (res.id === id) {
          let newQuantity = res.quantity - 1 > 1 ? res.quantity - 1 : 1;
          return {
            ...res,
            quantity: newQuantity,
            priceTotal: newQuantity * res.price,
          };
        }
        return res;
      });
    });
  };
  const [posk, setPosk] = React.useState(false);
  return (
    <div className={s.header}>
      {posk ? (
        <div className={s.posk}>
          <Posk setPosk={setPosk} posk={posk} />
        </div>
      ) : null}
      <div className={s.menu}>
        <div className={s.info}>
          <div className={s.logo_block1}>
            <div className={s.logo_block1div}></div>
            <Image src="/image.png" alt="/" width={79} height={48} />
          </div>
          <div className={s.logo_block2}>
            <HiRectangleGroup className={s.HiRectangleGroup} /> <p>Каталог</p>{" "}
            <samp></samp>
          </div>
        </div>
        <div className={s.info2}>
          <button onClick={() => setPosk(!posk)} className={s.org_2000}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 10.5985C11.6171 9.5792 12.2 8.20276 12.2 6.68802C12.2 3.54661 9.69279 1 6.6 1C3.50721 1 1 3.54661 1 6.68802C1 9.82943 3.50721 12.376 6.6 12.376C8.2015 12.376 9.64599 11.6932 10.6667 10.5985ZM10.6667 10.5985L15 15"
                stroke="black"
              />
            </svg>
          </button>
          <input type="text" className={s.info2_input} list="test" />
          <datalist id="test">
      
                <option  value="Lorem ipsum dolor sit."></option>
                
                <option  value="Lorem ipsum  sit."></option>
                <option  value="Lorem sit."></option>
          
          </datalist>
          <div className={s.info2_block}>
            <div className={s.svg}>
            <Badge badgeContent={mapindex} color="primary">
            <svg
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.75 3.25H1L3.8125 14.5H14.5L16.75 3.25ZM16.75 3.25L17.3125 1H20.6875"
                  stroke="#333333"
                />
              </svg>
      </Badge>
              
            </div>
            <div className={s.svg}>
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.514026 17.5C0.746109 13.3781 3.82806 10.1923 7.5 10.1923C11.1719 10.1923 14.2539 13.3781 14.486 17.5H7.5H0.514026ZM11.7727 4.84615C11.7727 7.25369 9.85259 9.19231 7.5 9.19231C5.14741 9.19231 3.22727 7.25369 3.22727 4.84615C3.22727 2.43862 5.14741 0.5 7.5 0.5C9.85259 0.5 11.7727 2.43862 11.7727 4.84615Z"
                  stroke="#333333"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={s.content}>
        <p className={s.home}>Главная / Корзина / Оформление заказа</p>
        <p className={s.home2}>Оформление заказа</p>
        <div className={s.content_block}>
          <div className={s.content_block_bloxl}>
            <Tablee
              data={data}
              mapindex={mapindex}
              deletePost={deletePost}
              quantityInPost={quantityInPost}
              quantityDePost={quantityDePost}
            />
          </div>
          <div className={s.content_block1}>
            <div className={s.content_block1_info}>
              <h4>Стоимость заказа</h4>
              <p>
                Товары({mapindex}) <samp>{price}</samp>
              </p>
              <p>
                Доставка <samp>Бесплатно</samp>
              </p>
              <hr />
              <h3>
                Итого <samp>{price}</samp>
              </h3>
              <button>Подтвердить заказ</button>
              <h2>
                Подтверждая заказ, я принимаю <br />{" "}
                <samp>условия пользовательского соглашения</samp>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={s.content2}>
        <h2>Оформление заказа</h2>
        <div className={s.content2_block}>
          <div className={s.content2_block1}>
            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="name"
              variant="filled"
            />
            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="Фамилия"
              variant="filled"
            />
          </div>
          <div className={s.content2_block1}>
            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="E-mail"
              variant="filled"
            />
            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="Телефон"
              variant="filled"
            />
            <br />
            <br />
            <br />

            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="Доп телефон или whatsapp"
              variant="filled"
            />
          </div>
          <div className={s.content2_block1}></div>
        </div>
      </div>
      <div className={s.content3}>
        <h4>я</h4>
        <div className={s.content3_block}>
          <Checkbox
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <p>Физическое лицо</p>
        </div>
        <div className={s.content3_block}>
          <Checkbox
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <p>Юридическое лицо</p>
        </div>
      </div>
      <div className={s.content4}>
        <h2>Доставка</h2>
        <div className={s.content4_s}>
          <h3>Способ доставки</h3>
          <div className={s.content4_block}>
            <Checkbox
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            <p>Курьерская доставка</p>
            <samp>режим работы магазина</samp>
          </div>
          <div className={s.content4_block}>
            <Checkbox
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            <p>Самовывоз</p>
            <samp>условия доставки</samp>
          </div>
        </div>
        <div className={s.content4_s}>
          <h2>Адрес доставки</h2>
          <div className={s.content2_block1}>
            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="Страна"
              variant="filled"
            />
            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="Город"
              variant="filled"
            />
          </div>
          <div className={s.content2_block1}>
            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="Улица"
              variant="filled"
            />
            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="Квартира"
              variant="filled"
            />
            <br />
            <br />
            <TextField
              className={s.content2_block1_TextField}
              id="filled-basic"
              label="Дом"
              variant="filled"
            />
          </div>
        </div>
        <div className={s.content5_s}>
          <p>Указать домофон, этаж, подъезд и комментарий к адресу</p>
          <TextField
            className={s.content5_s_a}
            id="filled-basic"
            label="Комментарий"
            variant="filled"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
