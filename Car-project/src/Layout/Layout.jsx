import { Outlet } from "react-router-dom";
import Nav from "../Page/Shared/Nav/Nav";
import Footer from "../Page/Shared/Footer/Footer";

function Layout() {
  return (
    <div className="">
      <div>
        <Nav></Nav>
        <div className="min-h-[calc(100vh-290px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Layout;
