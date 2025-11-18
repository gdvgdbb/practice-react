
const a = 1111
const fn = () => 'Tom'
const list = [
  {
    id: 1,
    desc: '得即高歌失即休'
  },
  {
    id: 2,
    desc: '世间无限丹青手'
  },
  {
    id: 3,
    desc: '不及汪伦送我情'
  },
  {
    id: 4,
    desc: '一览众山小'
  }
]
const flag = true
const taggle = 2

const fnc = () => {
  if (taggle === 0) {
    return <div>无图</div>
  } else if (taggle === 1) {
    return <div>一图</div>
  } else {
    return <div>多图</div>
  }
}

const handleClick = (a, e) => {
  console.log('button 被点击了', a, e);
}


function App() {
  return (
    <div className="App">
      this is App
      { 'hello world' }
      { 123 }
      { a }
      { fn() }
      { new Date().getDate() }
      <div style={{ color:'red' }}>My name id toni</div>
      <ul>
        { list.map(item => <li key={ item.id } style={{ color: 'skyblue' }}>{ item.desc }</li>) }
      </ul>
      { flag && <div>条件为真</div> }
      { flag ? <div>真</div> : <div>假</div> }
      { fnc() }
      <button onClick={ (e) => handleClick('hello', e) }>点击我</button>
    </div>
  );
}

export default App;
