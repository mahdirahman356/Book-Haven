// import { useLoaderData } from "react-router-dom";
import ResourcesDetails from "./ResourcesDetails";
import { useEffect, useState } from "react";

const Resources = () => {
    // let res = useLoaderData()
    let [res,setRes] = useState([])
    useEffect(()=>{
     fetch('Resources.json')
     .then(res => res.json())
     .then(data => setRes(data))
    },[])
    return (
        <div className="my-12 md:my-24">
           <div className="px-4">
           <p className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Classic Novels Everyone Should Read</p>
           <p className="text-gray-500 text-[12px] md:text-[15px]">Explore the timeless allure of classic literature with our handpicked selection of novels. From Harper Lees To Kill a Mockingbird and George Orwells 1984 to Jane Austens Pride and Prejudice, these masterpieces offer profound insights into humanitys struggles and triumphs. Experience the moral dilemmas of To Kill a Mockingbird, confront the dystopian reality of 1984, and revel in the romance of Pride and Prejudice. Whether youre a seasoned reader or just starting your literary journey, these classics promise to captivate and inspire</p>
           </div>
           <div>
            {
                res?.map((res,index)=> <ResourcesDetails
                 key={index}
                 res={res}
                 ></ResourcesDetails>)
            }
           </div>
        </div>
    );
};

export default Resources;