import { useLoaderData, useParams } from "react-router-dom";
import { saveToReadList, saveToWishList} from "../Storege/Storege";
import  { Toaster } from 'react-hot-toast';
// import { saveToStoregeAddWish } from "../Storege/Storege";

const BookDetails = () => {
    let books = useLoaderData()
    let {id} = useParams()
    let idInt = parseInt(id)
   
 let book = books.find(books => books.bookId === idInt)
     let {image,bookName,author,tags,rating,category,review,totalPages,publisher,yearOfPublishing} = book
  
   let  handleReadButton = () => {
        saveToReadList(book)
    }
    let handleWishButton = () => {
      saveToWishList(book)
      // saveToStorege(book)
    }
    
    return (
        <div>
         <div className="hero min-h-[80vh]  my-14">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-full flex justify-center items-center bg-[#F3F3F3]  py-5 md:py-16 rounded-xl">
    <img src={image} className="max-w-lg rounded-lg  w-[50%]" />
    </div>
    <div className="w-full">
      <h1 className="text-3xl font-bold">{bookName}</h1>
      <p className="py-3 font-semibold text-[#131313CC] text-[15px]">{author}</p>
       <p className="py-3 border-y-[2px] font-semibold text-[#131313CC] text-[15px]">{category}</p>
       <p className="py-3 "><span className="font-bold">Review</span> : {review}</p>
       <div className="flex gap-5 py-4 border-b-2 ">
                <span className="font-bold">Tag</span>
                <p className="text-[#23BE0A] bg-[#F3F3F3] font-semibold px-3 py-1 rounded-2xl">{tags[0]}</p>
                <p className="text-[#23BE0A] bg-[#F3F3F3] font-semibold px-3 py-1 rounded-2xl">{tags[1]}</p>
            </div>

        
          <table className="w-[100%] my-5">
            <tr>
                <th></th>
                <th></th>
            </tr>

            <tr>
           <td className="text-[#131313B3]">Number of Pages:</td>
            <td className="font-semibold">{totalPages}</td>  
            </tr>

            <tr>
            <td className="text-[#131313B3]">Publisher: </td>
            <td className="font-semibold">{publisher}</td>
            </tr>

            <tr>
            <td className="text-[#131313B3]">Year of Publishing:</td> 
            <td className="font-semibold">{yearOfPublishing}</td>
            </tr>

            <tr>
            <td className="text-[#131313B3]">Rating:</td> 
            <td className="font-semibold">{rating}</td>
            </tr>
          </table>

        
        


        <button onClick={handleReadButton} className="btn btn-outline border-gray-300">Read</button>
        <button onClick={handleWishButton} className="btn ml-2 bg-[#50B1C9] text-white">Wishlist</button>  
      <Toaster></Toaster>
    </div>
  </div>
</div>
        </div>
    );
};


export default BookDetails;