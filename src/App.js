import React from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";

const item = [
  {
    title: "What is React?",
    content: "React is a Front-end js framework(technically it's a library)",
  },
  {
    title: "Why we use it soo much?",
    content:
      "Due to it's reusability and simplicity we use Reactjs. Also performance time is a big factor in this",
  },
  {
    title: "Who created Reactjs?",
    content: "Reactjs is created by the engineers of facebook ",
  },
];

const App = () => {
  return (
    <div className="ui container">
      <Search />
    </div>
  );
};

export default App;
