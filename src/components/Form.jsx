export default function Form() {
  const [name, setName]= useState {""};
  function handleChange() {
    console.log("Changed Occured");
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value="name"></input>
      </form>
    </div>
  );
}
