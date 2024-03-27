import ResourcesDetails from "./ResourcesDetails";
import { useEffect, useState } from "react";

const Resources = () => {
    let [res,setRes] = useState([])
    useEffect(()=>{
     fetch('/Resources.json')
     .then(res => res.json())
     .then(data => setRes(data))
    },[])
    return (
        <div className="my-12 md:my-24">
           <div className="px-4">
           <p className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 text-center">Classic Novels Everyone Should Read</p>
           <p className="text-gray-500 text-[12px] md:text-[15px] md:w-[70%] mx-auto text-center">Explore the timeless allure of classic literature with our handpicked selection of novels.</p>
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