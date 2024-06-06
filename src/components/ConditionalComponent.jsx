import Code from "./Code";
import Welcome from "./welcome";

export default function conditionalComponent() {
  // const display = true;
  // if (display) {
  //   return (
  //     <div>
  //       <h3>This is a conditionalComponent</h3>
  //       <Welcome />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h3>code everyday</h3>
  //       <Code />
  //     </div>
  //   );
  // }

  let message;
  // let messageOne = <h1> this is saikat </h1>;
  // let messageTwo = <h1> this is shanto </h1>;
  const display = false;
  // if (display) {
  //   return messageOne;
  // } else {
  //   return messageTwo;
  // }
  if (display) {
    message = <h1> this is saikat </h1>;
  } else {
    message = <h1> this is shanto </h1>;
  }
  return message;
}
