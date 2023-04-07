import React, { useRef, useState, useEffect } from "react";
import { Categories } from "../Components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const mainBlockAnimation = {
  hidden: {
    y: 30,
    opacity: 0.2,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLInputElement | null>(null);
  const [categories, setCategories] = useState(false);

  useEffect(() => {
    if(carousel.current){
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const categoriesAndURL = [
    { name: "Видеокарты", url: "GPU" },
    { name: "Процессоры", url: "CPU" },
    { name: "Материнские платы", url: "Motherboards" },
    { name: "Оперативная память", url: "RAM" },
    { name: "Блоки питания", url: "PSU" },
    { name: "Охлаждение", url: "Cooling" },
    { name: "HDD", url: "HDD" },
    { name: "SSD", url: "SDD" },
    { name: "Корпуса", url: "Cases" },
  ];

  const data = [
    {
      name: "RTX 3080",
      image:
        "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166",
      price: "64999",
    },
    {
      name: "Ryzen 9 5900x",
      image:
        "https://www.amd.com/system/files/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png",
      price: "50115",
    },
    {
      name: "Z790 AORUS",
      image:
        "https://www.gigabyte.com/Image/1179b2ed6a06bb7f43bd798c948ebf92/Product/32318/webp/1000",
      price: "49990",
    },
    {
      name: "RTX 3080",
      image:
        "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166",
      price: "64999",
    },
    {
      name: "RTX 3080",
      image:
        "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166",
      price: "64999",
    },
    {
      name: "RTX 3080",
      image:
        "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166",
      price: "64999",
    },
    {
      name: "RTX 3080",
      image:
        "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166",
      price: "64999",
    },
  ];

  const bannerImages = [
    "https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11308_01_rx6900xt_nitro_16ggddr6/11308_01_rx6900xt_nitro_16gbgddr6_c02_800x500.ashx",
    "https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11308_01_rx6900xt_nitro_16ggddr6/11308_01_rx6900xt_nitro_16gbgddr6_c02_800x500.ashx",
    "https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11308_01_rx6900xt_nitro_16ggddr6/11308_01_rx6900xt_nitro_16gbgddr6_c02_800x500.ashx",
    "https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11308_01_rx6900xt_nitro_16ggddr6/11308_01_rx6900xt_nitro_16gbgddr6_c02_800x500.ashx",
  ];

  return (
    <>
      <motion.div className="container" initial="hidden" whileInView="visible">
        <div className="mainpage-top-grid">
          <motion.div
            variants={mainBlockAnimation}
            className="mainpage-category-menu"
          >
            <div className="category-menu-header">
              <h1>Каталог</h1>
              <a
                className={categories ? "menu-btn" : "menu-btn menu-btn_active"}
                onClick={() => setCategories(!categories)}
              >
                <span></span>
              </a>
            </div>
            <div className={categories ? "wrapper hide" : "wrapper"}>
              <Categories items={categoriesAndURL} />
            </div>
          </motion.div>
          <motion.div
            variants={mainBlockAnimation}
            transition={{ delay: 0.02 }}
            className="mainpage-slider"
          >
            <div className="slides">
              {bannerImages.map((img) => (
                <img src={img} draggable="false" alt="баннер" />
              ))}
            </div>
          </motion.div>
        </div>
        <h3 className="title">Популярные товары</h3>
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="carousel"
        >
          <motion.div
            drag={"x"}
            dragConstraints={{ right: 0, left: -width }}
            className="mainpage-bot-flex"
          >
            {data.map((item, id) => (
              <div className="mainpage-bot-block-left">
                <a>{item.name}</a>
                <img src={item.image} />
                <div className="category-content__buy__block">
                  <p>{Number(item.price).toLocaleString()}₽</p>
                  <a className="category-content__item__button">Купить</a>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
