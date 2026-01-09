import { useSearchParams, useNavigate, Outlet, Link } from 'react-router-dom'
const Login = () => {
  // const [params] = useSearchParams();
  // console.log(params.get('name'));
  // const navigate = useNavigate();
  return (
    <>
      <div>Login</div>
      {/* <button onClick={() => navigate('/aaa')}>a</button> */}
      <Link to="/">a</Link>
      <br />
      <Link to="/bbb">b</Link>
      {/* <button onClick={() => navigate('/bbb')}>b</button> */}
      <Outlet />
    </>
  );
}

export default Login;