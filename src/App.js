import { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  useEffect( () => {
    async function getList() {
      const data = await fetch("http://geek.itheima.net/v1_0/channels");
      const json = await data.json();
      console.log(data, json);
      setList(json.data.channels);
    }
    getList();
  }, [])
  return (
    <div className="App">
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
