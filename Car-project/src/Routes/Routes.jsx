import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Main/Main";
import Login from "../Page/Login/Login";
import Signup from "../Page/SignUp/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{ path: "/", element: <Home></Home> }],
  },
  {
    path : "/login",
    element : <Login></Login>
  },
  {
    path : "/register",
    element : <Signup></Signup>
  },
]);

export default router;
