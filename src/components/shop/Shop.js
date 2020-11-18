import React from "react";
import Item from "./Item";
import NikeAir from "../../img/NikeAir.jpg";
import Adidas from "../../img/adidas.jpg";
import Jordan from "../../img/Jordan.jpg";

const Shop = () => {
  const items = [
    {
      id: 1,
      title: "Nike Air 233",
      img: NikeAir,
      desc: "Basket pour Homme Nike air",
      price: 59.99,
    },
    {
      id: 2,
      title: "Adidas Pro",
      img: Adidas,
      desc: "Basket pour femme Adidas Pro",
      price: 55.99,
    },
    {
      id: 3,
      title: "Air Jordan",
      img: Jordan,
      desc: "Basket Enfant Air Jordan",
      price: 109.59,
    },
    {
      id: 6,
      title: "Adidas 247",
      img: Adidas,
      desc: "Basket pour Homme 247",
      price: 88.99,
    },
  ];

  return (
    <div>
      <section>
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            letterSpacing: "4px",
            borderBottom: "3px solid #f5796d",
            width: "10%",
            margin: "auto",
            color: "#f5796d",
          }}
        >
          Shop
        </h2>
        <div className='shop_container'>
          {items.map((item) => (
            <Item
              key={item.id}
              price={item.price}
              title={item.title}
              desc={item.desc}
              img={item.img}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
