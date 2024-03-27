import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { getBooks } from "../Storege/Storege";
// import Read from './Read'
const ListedBooks = () => {

    let [tabs,setTabs] = useState(0) 
    // let [sorting,setSorting] = useState([])
    // let [sortAdd,setSortAdd] = useState([])
    // useEffect(() => {
    //     let sort = getBooks();
    //     setSorting(sort);
    //     setSortAdd(sort)
    // }, [])
    // let sortBooks =  [...sortAdd]
    // let handleSorting = sortName => {
    //     if (sortName === 'totalPages') {
    //         let total = sortBooks.sort((a,b)=> a.totalPages - b.totalPages)
    //         setSorting(total)
    //         console.log(total)
    //     }
    // };
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
          {/* <div className="flex justify-center mt-9 mb-20">
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#23BE0A]">Sort By</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a onClick={()=>handleSorting('totalPages')}>Totale Pages</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
           </div> */}
          </div>
             {/* {
                sorting.map((sorting,index) => <Read 
                key={index}
                sorting={sorting}
                ></Read>)
             } */}
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;
