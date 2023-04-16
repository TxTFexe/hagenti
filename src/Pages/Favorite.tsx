import React from "react";
import { RootState, useAppDispath } from "../redux/store";
import { useSelector } from "react-redux";

const Favorite: React.FC = () => {
      const dispath = useAppDispath();
      const { totalCount, items } = useSelector((state: RootState) => state.favorite);

      const [slides, setSlides] = React.useState([
            "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165",
            "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165",
            "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168",
            "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169",
      ]);

  return (
    <div className="container">
      <div className="favorite">
            <div className="favorite-title">
                  <h1>Избранное</h1>
                  <span>{totalCount}</span>
            </div>
            <div className="favorite-grid">
                  {items.map((item, index) => (<div key={index} className="favorite-product-item">
                        <img src={item.pic} draggable="false"/>
                        <span>{item.name}</span>
                        <br/>
                        <span>{item.price}</span>
                  </div>))}
            </div>
      </div>
    </div>
  );
};

export default Favorite;