import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am react parent"),
    React.createElement("h2", {}, "I am react child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am react parent"),
    React.createElement("h2", {}, "I am react child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
