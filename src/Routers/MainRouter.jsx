import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const MainRouter = () => {
    return (
        <div>
             <div className="w-[93%] md:w-[85%] mx-auto">
             <Navbar></Navbar>
             <Outlet></Outlet>
             </div>
        </div>
    );
};

export default MainRouter;