import { useState, useRef } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const list = [
    { id: 1, content: "111", likeNum: 200, hot: 400 },
    { id: 2, content: "222", likeNum: 300, hot: 500 },
    { id: 3, content: "333", likeNum: 100, hot: 600 },
  ]
  const [commentList, setCommentList] = useState(list);

  const handleSumbit = () => {
    setCommentList([
      ...commentList,
      { id: commentList.length + 1, content: inputValue, likeNum: 0, hot: 0 },
    ])
    setInputValue("");
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <p></p>
      <input type="text" ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleSumbit}>发送</button>
      <ul>
        {commentList.map(item => (
          <li key={item.id}>
            <span>{item.content}</span>
            <span>点赞数：{item.likeNum}</span>
            <span>热度：{item.hot}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 
