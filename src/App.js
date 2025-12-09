import { createContext, useContext } from "react";
const MsgContext = createContext("");

function A() {
  const mesg = useContext(MsgContext);
  return (
    <>
      <div>我是A</div>
      {mesg}
      <B />
    </>
  )
}

function B() {
  const msg = useContext(MsgContext);
  console.log(msg);
  return (
    <div>
      我是B
      <span>{msg}</span>
    </div>
  )
}

function App() {
  const name = "小明";
  const age = 17
  return (
    <div className="App">
      <MsgContext.Provider value={[name, age]}>
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
