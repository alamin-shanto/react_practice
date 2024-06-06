import Code from "./Code";
import Welcome from "./welcome";

export default function conditionalComponent() {
  // 1st style of component (but its a wrong method)

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

  // 2nd style of function (its ok, but dont call return twice)

  // let messageOne = <h1> this is saikat </h1>;
  // let messageTwo = <h1> this is shanto </h1>;
  const display = false;
  // if (display) {
  //   return messageOne;
  // } else {
  //   return messageTwo;
  // }

  // 3rd style of function (great style of calling)
  // if (display) {
  //   message = <h1> this is saikat </h1>;
  // } else {
  //   message = <h1> this is shanto </h1>;
  // }
  // return message;

  // 4th style of calling function (turner operator)

  // return display ? <h1> this is saikat </h1> : <h1> this is shanto </h1>;
  return display ? <Welcome /> : <Code />;
}
