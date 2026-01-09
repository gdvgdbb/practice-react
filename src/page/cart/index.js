import { useParams } from "react-router-dom";
const Cart = () => {
  const params = useParams();
  console.log(params.id);
  return <div>cart</div>
}

export default Cart;