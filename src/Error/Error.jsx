import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    let error = useRouteError()
    console.error(error)
    return (
        <div className="h-screen flex flex-col gap-3 justify-center items-center">
             <i className="text-3xl font-semibold">This Page is Not Found</i>
             <i className="text-2xl">{error.status}</i>
             <i className="text-[15px]">{error.data}</i>
             <Link to={-1}>
             <button className="btn bg-slate-700 text-white">Go Back</button>
             </Link>
        </div>
    );
};

export default Error;