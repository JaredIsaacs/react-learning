import React, { useState } from "react";

interface Props {
  title: string;
  normalPrice: string;
  salePrice: string;
  image: string;
  link: string;
}

const Card = ({ title, normalPrice, salePrice, image, link }: Props) => {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className="card"
      style={
        isHover
          ? { backgroundColor: "lightgray" }
          : { backgroundColor: "white" }
      }
    >
      <a href={link}>
        <img
          className="card-img-top"
          src={image}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-subtitle old-price">{normalPrice}</p>
        <p className="card-subtitle">{"-> " + salePrice}</p>
      </div>
    </div>
  );
};

export default Card;
