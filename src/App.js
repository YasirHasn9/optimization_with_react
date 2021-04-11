import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

import { Children } from "./Children";

// this is a parent component that displays an input and also Children component
// Children component is the parent of five other components
// each child represents a color.
function Parent() {
  // on each input we type into the input field will cause a render to Children Component which
  // also cause to render 5 others Components
  const [inputValue, setInputValue] = useState("");
  const render = useRef(0);
  // on each update to the text, it will cause a re-render to the Parent Component
  // but
  const handleChange = useCallback((e) => setInputValue(e.target.value), [
    setInputValue,
  ]);
  // now if we pass this object as a props to Children component, it will cause a render to it even tho
  // we don't mutate it. And that happens because React.memo() does a shallow comparison
  // of props and also on each rendering it create a new instance of this object
  const obj = {
    render: false,
  };
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Render: {render.current++}</p>
      <Children obj1={obj} />
    </div>
  );
}

export default Parent;
