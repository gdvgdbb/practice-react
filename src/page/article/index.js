import { Link, useNavigate } from "react-router-dom";
const Article = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Article</div>
      <Link to="/">Go to Login</Link>
      <button onClick={() => navigate('/')}>去登录页</button>
      <button onClick={() => navigate('/?name=tom&age=12')}>传参方式一</button>
      <button onClick={() => navigate('/cart/101')}>传参方式二</button>
    </>
  )
}

export default Article;