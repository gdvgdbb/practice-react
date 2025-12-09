import { useState } from "react";
// function Son({ onSonMes }) {
//   const name = '今朝有酒今朝醉'
//   return (
//     <>
//       {/* <span>{props.children}</span> */}
//       {/* <span>{props.name}</span> */}
//       <button onClick={() => onSonMes(name)}>传送</button>
//     </>
//   )
// }

function A({ onSendA }) {
  const name = "张三";
  return (
    <>
      <h2>组件A</h2>
      <button onClick={() => onSendA(name)}>传</button>
    </>
  )
}

function B(props) {
  return (
    <>
      <h2>组件B</h2>
      <p>{props.name}</p>
    </>
  )
}

function App() {
  // const name = "张三";
  // const [name, setName] = useState(""); 
  // const msg = (value) => {
  //   setName(value)
  // }
  const [name, setName] = useState("");
  const send = (value) => {
    setName(value);
  }
  return (
    <div className="App">
      {/* <Son name={name} /> */}
      {/* <Son onSonMes={msg}>
        <span>哈哈哈哈</span>
      </Son>
      <p>{name}</p> */}
      <A onSendA={send} />
      <B name={name} />
    </div>
  );
}

export default App;
