import { LuUser2 } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";


const BlogDetails = ({blog}) => {
    let {image,title,date,category,author,content,hashtags} = blog
    return (
        <div>
            <div className="hero mb-10 rounded-xl">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className=" md:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="py-6">{content}</p>
      <div className="flex flex-col md:flex-row md:gap-12 my-3 mb-6">

        <p className="text-gray-500">{hashtags[0]}</p>
        <p className="text-gray-500">{hashtags[1]}</p>
        <p className="text-gray-500">{hashtags[2]}</p>
      </div>
      <div className="flex gap-12 ">
      <p className="flex items-center gap-1 text-gray-500"><LuUser2 /><span>{author}</span></p>
      <p className="flex items-center gap-1 text-gray-500"><span><MdOutlineDateRange /></span>{date}</p>
      </div>
      
      <div className="mt-6">
      <span className="text-[#328EFF] bg-[#328EFF26] font-semibold px-4 py-2 rounded-3xl text-center">Category: {category}</span>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default BlogDetails;