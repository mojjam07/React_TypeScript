import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Adekunle",
    last: "Atanda",
  };
  const nameList = [
    {
      first: 'Jamiu',
      last: 'Alabi'
    },
    {
      first: 'Jamiu',
      last: 'Aduke',
    },
    {
      first: 'Jamiu',
      last: 'Alani'
    }
  ]
  return (
    <>
      <Greet name="Mojeed" messageCount={28} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
}

export default App;
