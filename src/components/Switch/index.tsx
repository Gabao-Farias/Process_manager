import React, { useState } from 'react';

const Switch = (component : string) => {
  const [componentRender, setComponentRender] = useState("Home");

  switch (componentRender) {
    case '':
      return(<h1>Home</h1>);
    case '':
    return(<h1>Home</h1>);
    default:
      return(<h1>Home</h1>);
  }
}

export default Switch;
