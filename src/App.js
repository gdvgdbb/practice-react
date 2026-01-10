import { useState, useEffect } from 'react';
import _, { get } from 'lodash';
import classNames from 'classnames';
import './index.css';
import axios from 'axios';

// 封装函数
function useGetList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const res = await axios.get('http://localhost:4000/listDate')
      setList(res.data)
    }
    getList()
  },[])
  return [ list, setList ]
}

// 封装组件
function ListItem({ item, id, handleDelete }) {
  return (
    <div key={item.id}>
      <h2>{item.name}</h2>
      <span>点赞数: {item.goodNum}</span>
      <span>热度: {item.hotNum}</span>
      { item.id === id && <span onClick={() => handleDelete(item.id)}>删除</span> }
    </div>
  )
}

function TitleItem({ type, typeId, handleType }) {
  return (
    <span 
      key={type.id} 
      onClick={() => handleType(type.id)}
      // className={ type.id === typeId ? 'active' : '' }
      className={classNames({ active: type.id === typeId })}
    >
      {type.name}
    </span>
  )
}

function App() {
  // const listDate = [
  //   { id: 1, name: 'Item 1', goodNum: 100, hotNum: 300 }, 
  //   { id: 2, name: 'Item 2', goodNum: 200, hotNum: 100 },
  //   { id: 3, name: 'Item 3', goodNum: 50, hotNum: 500 }
  // ]
  // const [list, setList] = useState(_.orderBy(listDate, 'goodNum', 'desc'));
  const [list, setList] = useGetList();
  const [typeId, setTypeId] = useState(1);
  const id = 2;
  const typeList = [
    { id: 1, name: '最新' },
    { id: 2, name: '最热' }
  ]
  
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

  const handleDelete = (itemId) => {
    setList(list.filter(item => item.id !== itemId))
  }
  
  return (
    <div className="App">
      <div>
        { typeList.map(type => (
          <TitleItem key={type.id} type={type} typeId={typeId} handleType={handleType} />
        )) }
      </div>
      { list.map((item) => (
        <ListItem key={item.id} item={ item } id={ id } handleDelete={ handleDelete } />
      )) }
    </div>
  );
}

export default App;
