import { useLoaderData } from "react-router-dom";
import BlogDetails from "./BlogDetails";

const Blog = () => {
    let blog = useLoaderData()
    console.log(blog)
    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-3xl font-bold mb-2">The Reading Corner</h1>
                <p className="text-gray-500">The Reading Corner is your go-to destination for all things book-related.</p>
            </div>
            {
                blog.map((blog,index)=> <BlogDetails
                 key={index}
                 blog={blog}
                 ></BlogDetails>)
            }
        </div>
    );
};

export default Blog;