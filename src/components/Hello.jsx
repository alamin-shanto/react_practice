const name = "Rob";
function displayMessage() {
  return "Hey People";
}
function Hello({ person, age }) {
  return (
    <div>
      <h1>
        {person.message} {person.name} {person.emoji}
        {person.seatNumbers}
      </h1>
      <div>saikat here</div>
      <div>ages = {age}</div>
      <div>
        {displayMessage()} {255 - 123} {name}
      </div>
    </div>
  );
}

export default Hello;
