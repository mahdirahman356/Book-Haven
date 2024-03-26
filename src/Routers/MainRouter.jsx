import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const MainRouter = () => {
    return (
        <div>
             <div className="md:w-[85%] mx-auto">
             <Navbar></Navbar>
             </div>
             <div className="w-[98%] md:w-[85%] mx-auto">
             <Outlet></Outlet>
             </div>
             
        </div>
    );
};

export default MainRouter;