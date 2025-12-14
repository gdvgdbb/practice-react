import { useState } from "react";
function useTaggle () {
  const [value, setvalue] = useState(true);
  const toggleValue = () => {
    setvalue(!value);
  }
  // return { value, toggleValue };
  return [value, toggleValue];
}
function App() {
  const { value, toggleValue } = useTaggle();
  return (
    <div className="App">
      { value && <h1>Hello World!</h1> }
      <button onClick={toggleValue}>点击切换</button>
    </div>
  );
}

export default App;
