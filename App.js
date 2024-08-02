import React from "react";
import ReactDOM from "react-dom/client";
// JSX=>React.createElement()=>ReactElement-JS Object=>HTMLRender(render)
// React element
const heading = (
  <h1 id="heading" className="head" tabIndex={1}>
    Namaste React using JSX
  </h1>
);
// React functional component
const HeadingComponent = () => {
  return <h1>Namaste React functional component</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
