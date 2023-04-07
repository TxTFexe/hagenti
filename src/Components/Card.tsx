import React from "react";
import { Link } from "react-router-dom";
import { CartItem, addItem } from '../redux/slices/cartSlice'
import { useAppDispath } from "../redux/store";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

type CardProps = {
    id: string;
    pic: string;
    name: string;
    price: number; 
    count: number;
    type: string;
}

const Card: React.FC<CardProps> = ({ id, pic, name, price, count, type }) => {
    const dispatch = useAppDispath();
    const [currentShowImage, setCurrentShowImage] = React.useState<number>(0);

    const onCLickAdd = () => {
        const item: CartItem = {
            id,
            name,
            price,
            pic,
            count,
            type
        };
        dispatch(addItem(item))
    }

    const [slides, setSlides] = React.useState([
        pic,
        "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165",
        "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168",
        "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169",
      ]);
    
    //Добавить: 
    //(необязательно) слайдер с картинками товара

    return(
        <div className='category-content__item'>
            <div onMouseLeave={() => {setCurrentShowImage(0)}} className='category-content__item__image'>
                <Link to={"/Category/GPU" + "/" + id}>
                <img src={slides[currentShowImage]} alt={name} draggable="false"/>
                <div className="category-content__item__picture__overlay">
                    <div onMouseEnter={() => setCurrentShowImage(0)}></div>
                    <div onMouseEnter={() => setCurrentShowImage(1)}></div>
                    <div onMouseEnter={() => setCurrentShowImage(2)}></div>
                    <div onMouseEnter={() => setCurrentShowImage(3)}></div>
                </div>
                <div className="dot__container">
                    <span className={currentShowImage === 0 ? "dot dot__active" : "dot"}></span>
                    <span className={currentShowImage === 1 ? "dot dot__active" : "dot"}></span>
                    <span className={currentShowImage === 2 ? "dot dot__active" : "dot"}></span>
                    <span className={currentShowImage === 3 ? "dot dot__active" : "dot"}></span>
                </div>
                </Link>
            </div>
            <div className="category-content__title_and_description">
                <div className="category-content__title">
                    <Link to={"/Category/GPU" + "/" + id}>{name}</Link>
                    <AiOutlineHeart/>
                </div>
                <span>Видеочипсет: NVIDIA GeForce RTX 3080, 1830 МГц</span>
                <span>Память: 12288 МБ GDDR6X, 19000 МГц</span>
                <span>Интерфейс: PCI-E 4.0</span>
                <span>Техпроцесс: 8 нм</span>
                <span>Разъемы: Display Port x 3</span>
            </div>
            <div className="category-content__buy__block">
                <p>{price.toLocaleString()}₽</p>
                <a onClick={onCLickAdd} className="category-content__item__button">В корзину</a>
            </div>
        </div>
    )}

export default Card;