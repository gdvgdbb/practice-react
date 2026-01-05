import { useSelector, useDispatch } from "react-redux";
import { inscrement, decrement, addToNum } from "./store/modules/counterStore";
import { fetchChannelList } from "./store/modules/channelStore";
import { useEffect } from "react";
function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      { count }
      <button onClick={() => dispatch(inscrement())}>+</button>
      <br />
      <button onClick={() => dispatch(addToNum(10))}>+10</button>
      <button onClick={() => dispatch(addToNum(20))}>+20</button>
      <br />
      <ul>
        { channelList.map(item => <li key={item.id}>{ item.name }</li>) }
      </ul>
    </div>
  );
}

export default App;
