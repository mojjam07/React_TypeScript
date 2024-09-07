// import React from 'react'

type headerText = {
  children: string;
};

function Heading(props: headerText) {
  return <div>{props.children}</div>;
}

export default Heading;
