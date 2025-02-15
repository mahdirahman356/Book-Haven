import BlogDetails from "./BlogDetails";
import { useEffect, useState } from "react";

const Blog = () => {
    let  [blog,setBlog] = useState()
    useEffect(()=> {
      fetch('/Blogs.json')
      .then(res => res.json())
      .then(data => setBlog(data))
    },[])
    return (
        <div>
            <div className="text-center my-12 md:my-24">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">The Reading Corner</h1>
                <p className="text-gray-500">The Reading Corner is your go-to destination for all things book-related.</p>
            </div>
            {
                blog?.map((blog,index)=> <BlogDetails
                 key={index}
                 blog={blog}
                 ></BlogDetails>)
            }
        </div>
    );
};

export default Blog;