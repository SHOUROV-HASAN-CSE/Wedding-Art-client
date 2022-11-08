import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>, 
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/blogs',
            element: <Blogs/>
        },
        {
          path: '/login', 
          element: <Login/>
        },
        {
          path: '/signup', 
          element: <SignUp/>
        },
      ]
    }
  ]);

  export default router;