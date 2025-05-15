import {useState} from "react";
function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Doe", age: 20 });

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.firstName} {person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <input
        type="text"
        value={person.firstName}
        onChange={(event) => setPerson({ ...person, firstName: event.target.value })}
      />
      <input
        type="text"
        value={person.lastName}
        onChange={(event) => setPerson({ ...person, lastName: event.target.value })}
      />
    </>
  );
}
export default Person;