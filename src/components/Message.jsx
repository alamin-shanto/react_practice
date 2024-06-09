export default function Message() {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>click me to get message</button>
    </div>
  );
}
