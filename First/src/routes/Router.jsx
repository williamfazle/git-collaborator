
import { createBrowserRouter } from 'react-router-dom';
import Rootlayout from '../layout/Rootlayout';
import Home from '../pages/Home/Home';

const Router = createBrowserRouter([
  { 
    path: "/",
    element: <Rootlayout/>,
    errorElement: <div>404 Not Found</div>,
    children: [
      { 
        index: true,
        element: <Home/>
      }
    ]
  }
]);



export default Router;

