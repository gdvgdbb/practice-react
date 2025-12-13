import { useState, useRef } from "react";
function App() {
  const [value, setValue] = useState();
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current);
  }
  return (
    <div className="App">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
