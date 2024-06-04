const name = "Rob";
function displayMessage() {
  return "Hey People";
}
function Hello({ name, message, emoji }) {
  return (
    <div>
      <h1>
        {message} {name} {emoji}
      </h1>
      <div>
        {displayMessage()} {255 - 123} {name}
      </div>
    </div>
  );
}

export default Hello;
