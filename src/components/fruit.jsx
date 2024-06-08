export default function Fruit({ name, price, Quality, Soldout }) {
  return (
    <>
      {/* {name} {Quality} {""} {price} */}
      {/* {price > 15 ? (
        <li>
          {name} {""}
          {Quality} {""}
          {price}
        </li>
      ) : (
        ""
      )} */}
      <li>
        {name} {""}
        {Quality} {""}
        {price} {""}
        {Soldout ? "Soldout" : "In Stock"}
      </li>
    </>
  );
}
