import React from "react";

type containerProps = {
  styles: React.CSSProperties;
};

function Container(props: containerProps) {
  return <div style={props.styles}>Text goes Here</div>;
}

export default Container;
