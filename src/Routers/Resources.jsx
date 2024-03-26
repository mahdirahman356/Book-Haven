import { useLoaderData } from "react-router-dom";
import ResourcesDetails from "./ResourcesDetails";

const Resources = () => {
    let res = useLoaderData()
    console.log(res)
    return (
        <div className="my-12 md:my-24">
           <div className="px-4">
           <p className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">{res[0].title}</p>
           <p className="text-gray-500 text-[12px] md:text-[15px]">{res[0].description}</p>
           </div>
           <div>
            {
                res.slice(1,4).map((res,index)=> <ResourcesDetails
                 key={index}
                 res={res}
                 ></ResourcesDetails>)
            }
           </div>
        </div>
    );
};

export default Resources;