// import React from 'react'

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.last}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}

export default PersonList;
