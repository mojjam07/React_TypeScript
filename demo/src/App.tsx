import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Mojjam from "./components/Mojjam";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Adekunle",
    last: "Atanda",
  };
  const nameList = [
    {
      first: "Jamiu",
      last: "Alabi",
    },
    {
      first: "Jamiu",
      last: "Aduke",
    },
    {
      first: "Jamiu",
      last: "Alani",
    },
  ];
  return (
    <>
      <Greet name="Mojeed" messageCount={28} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Mojjam>
        <Heading>Mojjam goes to Paris</Heading>
      </Mojjam>
      <Button
        handleClick={() => {
          console.log("Button clicked!");
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </>
  );
}

export default App;
