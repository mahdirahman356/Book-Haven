import PropTypes from 'prop-types'; 
import { CiStar } from "react-icons/ci";

const Books = ({books}) => {
    let {image,bookName,author,tags,rating} = books
    return (
        // <div>
        //     <div className=" bg-base-100 shadow-xl">
        //         <div className="">
        //         <figure className="px-10 pt-10 bg-slate-300"><img className='rounded-2xl' src={image} alt="Shoes" /></figure>
        //         </div>
        //   <div className="space-y-3 p-6">
        //     <div className="flex gap-5">
        //         <p className="text-[#23BE0A] bg-[#F3F3F3] font-semibold px-3 py-1 rounded-2xl">{tags[0]}</p>
        //         <p className="text-[#23BE0A] bg-[#F3F3F3] font-semibold px-3 py-1 rounded-2xl">{tags[1]}</p>
        //     </div>
        //     <h2 className="text-xl font-bold">{bookName}</h2>
        //     <p className='font-semibold text-[#131313CC]'>BY : {author}</p>
        //     <div className="flex justify-between py-4 border-t-2 border-dashed border-[#13131326] ">
        //         <p>Fiction</p>
        //         <p className='flex items-center gap-1'>{rating}<CiStar className='text-[20px]'/></p>
        //     </div>
        //   </div>
        // </div> 



        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <div className='bg-[#F3F3F3] w-full py-5 flex justify-center rounded-xl'>
    <img  src={image} alt="Shoes" className="rounded-xl" />
    </div>
  </figure>
  <div className="space-y-3 p-6">
            <div className="flex gap-5">
                <p className="text-[#23BE0A] bg-[#F3F3F3] font-semibold px-3 py-1 rounded-2xl">{tags[0]}</p>
                <p className="text-[#23BE0A] bg-[#F3F3F3] font-semibold px-3 py-1 rounded-2xl">{tags[1]}</p>
            </div>
            <h2 className="text-xl font-bold">{bookName}</h2>
            <p className='font-semibold text-[#131313CC]'>BY : {author}</p>
            <div className="flex justify-between py-4 border-t-2 border-dashed border-[#13131326] ">
                <p>Fiction</p>
                <p className='flex items-center gap-1'>{rating}<CiStar className='text-[20px]'/></p>
            </div>
          </div>
</div>
        
    );
};

Books.propTypes ={
    books : PropTypes.object.isRequired
}

export default Books;