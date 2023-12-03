/*
React.createElement is an object
once root.render is run it converts heading to HTML in browser

*/

import React from "react";
import ReactDOM from "react-dom/client";

/*Single Element*/
const heading = React.createElement(
  "h1",
  { id: "heading", class: "heading" },
  "Hello world from React"
);

/*Nested Elements*/
const parent = React.createElement(
  "div",
  { class: "parent" },
  React.createElement(
    "div",
    { class: "child" },
    React.createElement("h1", { class: "header" }, "My H1 tag")
  )
);
/*Nested Elements with siblings*/
const parentWithSibling = React.createElement(
  "div",
  { class: "parent" },
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", { class: "header" }, "My H1 tag"),
    React.createElement("h2", { class: "header2" }, "My H2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentWithSibling);
