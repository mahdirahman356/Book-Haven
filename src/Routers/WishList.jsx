import { CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { TbPageBreak } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import {getWishList} from '../Storege/Storege'
import { RiArrowDropDownLine } from "react-icons/ri";



const WishList = () => {

    let [sorting,setSorting] = useState([])
    let [sortAdd,setSortAdd] = useState([])
    useEffect(() => {
        let sort = getWishList()
        setSorting(sort);
        setSortAdd(sort)
    }, [])
    let sortBooks =  [...sortAdd]
    let handleSorting = sortName => {
        if (sortName === 'totalPages') {
            let totalPageSort = sortBooks.sort((a,b)=> a.totalPages - b.totalPages)
            setSorting(totalPageSort)
            console.log(totalPageSort)
        }
        else if(sortName === 'rating'){
          let ratingSort = sortBooks.sort((a,b)=> a.rating - b.rating)
          setSorting(ratingSort)
        }
        else if(sortName === 'yearOfPublishing'){
          let yearOfPublishingSort = sortBooks.sort((a,b)=> a.yearOfPublishing - b.yearOfPublishing)
          setSorting(yearOfPublishingSort)
        }
    };
    return (
        <div>

<div className="flex justify-center mt-9 mb-20">
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#23BE0A]">Sort By<RiArrowDropDownLine className="text-[28px]"/></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a onClick={()=>handleSorting('totalPages')}>Totale Pages</a></li>
              <li><a onClick={()=>handleSorting('rating')}>Rating</a></li>
              <li><a onClick={()=>handleSorting('yearOfPublishing')}>Year of Publishing</a></li>
            </ul>
          </div>
           </div>


          {
            sorting?.map((wish,index)=>  <div key={index} className="flex flex-col md:flex-row  bg-base-100 shadow-xl my-7">
            <figure className="px-10 py-6 md:w-[30%] flex justify-center items-center">
              <div className="w-full bg-[#F3F3F3] py-6 flex justify-center items-center rounded-xl">
              <img src={wish.image} />
              </div>
            </figure>
            <div className="space-y-3 py-6 px-3">
              <h2 className="text-[22px] font-bold">{wish.bookName}</h2>
              <p className="font-semibold">By : {wish.author}</p>
              <div className="flex flex-col md:flex-row md:items-center gap-5 w-full">
                <div className="flex gap-4">
                <p className="font-bold">Tag</p>
                <p className="text-[#23BE0A] bg-[#F3F3F3] font-semibold px-3 py-1 rounded-2xl">{wish.tags[0]}</p>
                <p className="text-[#23BE0A] bg-[#F3F3F3] font-semibold px-3 py-1 rounded-2xl">{wish.tags[1]}</p>
                </div>
                <p className="flex gap-2 items-center"> <span className="flex gap-1 items-center"><CiLocationOn className="text-[20px]"/>Year of Publishing:</span> {wish.yearOfPublishing}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                  <p className="flex items-center gap-2 text-[#13131399]"><span className="flex items-center gap-2"><LuUsers />Publisher:</span> {wish.publisher}</p>
                  <p className="flex items-center gap-2 text-[#13131399]"><span className="flex items-center gap-2"><TbPageBreak /> Page: </span>{wish.totalPages}</p>
              </div>
             <div className="flex flex-col md:flex-row gap-7">
                <p className="text-[#328EFF] bg-[#328EFF26] font-semibold px-4 py-2 rounded-3xl text-center">Category: {wish.category}</p>
                <p className="text-[#FFAC33] bg-[#FFAC3326] font-semibold px-4 py-2 rounded-3xl text-center">Rating: {wish.rating}</p>
                <Link to={`/books/${wish.bookId}`}>
                <p className="text-[#ffff] bg-[#23BE0A] font-semibold px-4 py-2 rounded-3xl text-center">View Details</p>
                </Link>
             </div>
             
            </div>
          </div>)
          }  
          
        </div>
    );
};

export default WishList;