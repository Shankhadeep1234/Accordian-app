import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="ui container">
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle DropDown
      </button>
      {showDropdown ? (
        <DropDown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
