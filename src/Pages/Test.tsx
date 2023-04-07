import React from "react";

const Test: React.FC = () => {
  const data = [{ price: 1111114312 }];

  return (
    <div className="container">
      <div className="category__header">
        <h3>Страница для экспериментов</h3>
        {data.map((elem) => (
          <a>{elem.price}</a>
        ))}
      </div>
    </div>
  );
};

export default Test;
