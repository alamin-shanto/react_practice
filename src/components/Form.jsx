import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  // function handleChange(e) {
  //   setName(e.target.value);
  // }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          // onChange={function demo(e) {
          //   return handleChange(e);
          // }}
          // onChange={(e) => handleChange(e)}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        ></input>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        ></input>
      </form>
    </div>
  );
}
