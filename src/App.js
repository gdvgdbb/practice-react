import { useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import './index.css';

function App() {
  const listDate = [
    { id: 1, name: 'Item 1', goodNum: 100, hotNum: 300 }, 
    { id: 2, name: 'Item 2', goodNum: 200, hotNum: 100 },
    { id: 3, name: 'Item 3', goodNum: 50, hotNum: 500 }
  ]
  const [list, setList] = useState(_.orderBy(listDate, 'goodNum', 'desc'));
  const id = 2;
  const [typeId, setTypeId] = useState(1);
  const [typeList] = useState([
    { id: 1, name: '最新' },
    { id: 2, name: '最热' }
  ])

  const handleDelete = (itemId) => {
    setList(list.filter(item => item.id !== itemId))
  }

  const handleType = (typeId) => {
    setTypeId(typeId)
    // 方法一
    // setList([...list].sort((a, b) => {
    //   if (typeId === 1) {
    //     return b.goodNum - a.goodNum
    //   } else {
    //     return b.hotNum - a.hotNum
    //   }
    // }))
    // 方法二
    setList(_.orderBy(list, typeId === 1 ? 'goodNum' : 'hotNum', 'desc'))
  }
  return (
    <div className="App">
      <div>
        { typeList.map(type => (
          <span 
            key={type.id} 
            onClick={() => handleType(type.id)}
            // className={ type.id === typeId ? 'active' : '' }
            className={classNames({ active: type.id === typeId })}
          >
            {type.name}
          </span>
        )) }
      </div>
      { list.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <span>点赞数: {item.goodNum}</span>
          <span>热度: {item.hotNum}</span>
          { item.id === id && <span onClick={() => handleDelete(item.id)}>删除</span> }
        </div>
      )) }
    </div>
  );
}

export default App;
