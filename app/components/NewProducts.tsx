import React from 'react';
import ProductCard from './ProductCard';

const productData = [
  {
    img: "/img1.jpeg",
    title: "Lipstick",
    desc: "Glossy finish Red lipstick",
    rating: 4,
    price: "Rs.740",
  },
  {
    img: "/img2.jpeg",
    title: "Lipstick",
    desc: "Glossy finish Red lipstick",
    rating: 4,
    price: "Rs.740",
  },
  {
    img: "/img3.jpeg",
    title: "Lipstick",
    desc: "Glossy finish Red lipstick",
    rating: 4,
    price: "Rs.740",
  },
  {
    img: "/img4.jpeg",
    title: "Lipstick",
    desc: "Glossy finish Red lipstick",
    rating: 4,
    price: "Rs.740",
  },
];

const NewProducts = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto pt-16 px-4">
        <h2 className="font-medium text-2xl pb-4 text-center">New Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
