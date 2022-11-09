import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Gallery from "../../Pages/Gallery/Gallery";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
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
            path: '/services',
            element: <Services/>
        },
        {
          path: '/login', 
          element: <Login/>
        },
        {
          path: '/signup', 
          element: <SignUp/>
        },
        {
          path: '/gallery', 
          element: <Gallery/>
        },
        {
          path: '/servicedetails/:id', 
          element: <ServiceDetails/>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/myreview', 
          element: <MyReview/>
        },
        {
          path: '/addservice', 
          element: <AddService/>
        },
        
      ]
    }
  ]);

  export default router;