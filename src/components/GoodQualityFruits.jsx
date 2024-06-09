import React from "react";
import Fruit from "./fruit";
import Fruits from "./fruits";

export default function GoodQualityFruits() {
  // Filter out good quality products
  const goodQualityFruits = Fruit.Quality((Fruit) => Fruit.Quality === "good");
  console.log(goodQualityFruits);

  return (
    <div>
      <h2>Good Quality Fruits</h2>
      <ul>
        {goodQualityFruits.map((Fruit) => (
          <li key={fruit.name}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}
