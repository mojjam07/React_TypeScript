// import React from 'react'

type buttonProps = {
  handleClick: () => void;
};

function Button(props: buttonProps) {
  return <button onClick={props.handleClick}>Click!</button>;
}

export default Button;
