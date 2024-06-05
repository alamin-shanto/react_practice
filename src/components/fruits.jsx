import Fruit from "./fruit";
export default function Fruits() {
  // const fruits = ["apple", "watermelon", "guava", "Mango", "Pineapple"];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      Quality: "good",
    },
    {
      name: "Watermelon",
      price: 20,
      Quality: "good",
    },
    {
      name: "Guava",
      price: 5,
      Quality: "bad",
    },
    {
      name: "Mango",
      price: 15,
      Quality: "good",
    },
    {
      name: "Pineapple",
      price: 30,
      Quality: "good",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            Quality={fruit.Quality}
          ></Fruit>
        ))}
      </ul>

      {/* // <ul>
    //       <h1 key={fruit.name}>
    //           <li>
    //          {fruit.name} {fruit.Quality} ${fruit.price}
    //          </li> 
    //       </h1>
   //  </ul> */}
    </div>
  );
}
