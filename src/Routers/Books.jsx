import PropTypes from 'prop-types'; 
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Books = ({books}) => {
    let {bookId,image,bookName,author,tags,rating,category} = books
    return (
        <div>
        <Link to={`/books/${bookId}`}>
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
                <p>{category}</p>
                <p className='flex items-center gap-1'>{rating}<CiStar className='text-[20px]'/></p>
            </div>
          </div>
</div>
            </Link>
        </div>
        
    );
};

Books.propTypes ={
    books : PropTypes.object.isRequired
}

export default Books;