import React from "react";
import banner from "../Assets/Img/TestBanner.png";
import banner2 from "../Assets/Img/TestBanner1.png";
import banner3 from "../Assets/Img/TestBanner2.png";
import axios from "axios";

const images = [banner, banner2, banner3];

const Test: React.FC = () => {
  const [dataVideocard, setDataVideocard] = React.useState(null);

  const getVideocard = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/videokarta");
      setDataVideocard(data);
      console.log(dataVideocard);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div>{dataVideocard}</div>
      <button onClick={getVideocard}>Нажать</button>
    </div>
  );
};

export default Test;
