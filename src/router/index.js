import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import Article from '../page/article'
import Login from '../page/login'
import Cart from '../page/cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    children:[
      {
        // path: 'aaa',
        index: true,
        element: <div>aaa</div>
      },
      {
        path: 'bbb',
        element: <div>bbb</div>
      }
    ]
  },
  {
    path: '/article',
    element: <Article />
  },
  {
    path: 'cart/:id',
    element: <Cart />
  },
  {
    path: '*',
    element: <div>404</div>
  }
])

export default router