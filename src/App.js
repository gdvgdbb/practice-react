import { useEffect, useState } from "react";

function Child() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("我是一个普通人")
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
}

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  const [show, setShow] = useState(true);
  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleDown = () => {
    setData(data - 1)
  }
  // 1.不传任何依赖 --- 初始时加组件更新都会执行（不管是哪个数据变了）
  // 2.传空数组 --- 只在初始渲染时执行一次
  // 3.传具体的依赖 --- 初始时加只有当当前依赖变化时才会执行
  // useEffect(() => {
  //   console.log("有妖精！！！")  
  // }, [count])
  return (
    <div className="App">
      { show && <Child /> }
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleDown}>-1</button>
      <button onClick={() => setShow(false)}>卸载</button>
    </div>
  );
}

export default App;
