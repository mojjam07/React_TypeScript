import React from "react";

type mojjamProps = {
  children: React.ReactNode;
};

function Mojjam(props: mojjamProps) {
  return <div>{props.children}</div>;
}

export default Mojjam;
