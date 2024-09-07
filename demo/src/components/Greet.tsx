// import React from 'react'

// import Person from "./Person";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>This is the begining of my TypeScript Journey</h1>
      {props.isLoggedIn
        ? `Hello World!, My name is ${props.name}, I am ${props.messageCount} years old today`
        : "Welcome Guest"}
        {/* <Person first="Adekunle" last ="Atanda" /> */}
    </div>
  );
};

export default Greet;
