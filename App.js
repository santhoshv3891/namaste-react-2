import React from "react";
import ReactDOM from "react-dom/client";

const title = "Testing new title";

/* Another way of functional component */
const HeadingComponent2 = () => <h1>My second header</h1>;

const HeadingComponent3 = () => {
  return <h1>Another header with return</h1>;
};

/* Functional component */
const HeadingComponent = () => (
  <div>
    <HeadingComponent2 />
    <HeadingComponent3 />
    <h1>New header for react component - {title}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
