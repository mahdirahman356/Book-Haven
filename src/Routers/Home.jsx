import { useEffect, useState } from 'react';
import HeroImg from '../Image/pngwing 1.png'
import Books from './Books';
import { Link } from 'react-router-dom';
const Home = () => {
    let  [book,setBook] = useState([])
    useEffect(()=>{
     fetch('Books.json')
     .then(res => res.json())
     .then(data => setBook(data))
    },[])
    return (
        <div>
            <div className="hero min-h-[75vh] bg-base-200 mt-14 rounded-[30px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={HeroImg} />
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Books to freshen up your bookshelf</h1>
      <Link to="/listed">
      <button className="btn bg-[#23BE0A] text-white ">View The List</button>
      </Link>
    </div>
  </div>
</div>
     <div>
      <h1 className='text-center font-bold text-3xl my-12'>Books</h1>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 md:my-20">
     {
      book?.map((books,index)=> <Books 
      key={index}
      books={books}
      ></Books>)
     }
     </div>
    </div>
    );
};

export default Home;