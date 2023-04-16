import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import headerStyles from "./Header.module.scss";

export default function CartPopup() {
  const { totalCount, items, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div className={headerStyles.cart__popup}>
      <div className={headerStyles.cart__popup__title}>
        <span>{totalCount}. Товар</span>
        <span>{totalPrice.toLocaleString()}₽</span>
      </div>
      <div className={headerStyles.cart__popup__items}>
        {items.map((item) => (
          <div className={headerStyles.cart__popup__item}>
            <span>{item.name}</span>
            <div>
              <span>{item.price.toLocaleString()}₽</span>
              <span> x {item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
