// import React from 'react'

type personProps = {
  name: {
    first: string;
    last: string;
  };
};

function Person(props: personProps) {
  return (
    <div>
      My other names are {props.name.first} and {props.name.last}
    </div>
  );
}

export default Person;
