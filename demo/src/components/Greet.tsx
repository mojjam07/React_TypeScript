// import React from 'react'

type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>This is the begining of my TypeScript Journey</h1>
      Hello World!, My name is {props.name}
    </div>
  );
};

export default Greet;
