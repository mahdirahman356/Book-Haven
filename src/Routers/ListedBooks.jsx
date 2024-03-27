import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const ListedBooks = () => {

    let [tabs,setTabs] = useState(0) 
    return (
        <div>
            <div className="text-2xl font-bold text-center py-7 bg-[#1313130D] mt-5 rounded-xl">
                <h3 className="">Books</h3>
            </div>

            <div className="mt-7">
            <div className="flex items-center  sm:justify-start flex-nowrap  text-gray-100">
	
    <Link to="read" onClick={()=>setTabs(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-gray-400 ${tabs === 0 ? "border border-b-0" : "border-b"}  text-gray-400 rounded-t-xl`} >
		<span>Read Books</span>
	
    </Link>
   
	
    
    <Link to="wish" onClick={()=>setTabs(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-gray-400 ${tabs === 1 ? "border border-b-0" : "border-b"}  text-gray-400 rounded-t-xl`} >
		<span>Wishlist Books</span>
	</Link>
    <p className="flex  px-5 py-6 border-b border-gray-400 text-gray-400 w-full">
	</p>
	
</div> 
          </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;
