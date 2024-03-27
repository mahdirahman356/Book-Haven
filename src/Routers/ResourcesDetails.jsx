import { LuUserCircle2 } from "react-icons/lu";

const ResourcesDetails = ({res}) => {
    // console.log(res)
    let {title,year,genre,summary,author} = res
    return (
        <div>
            <div className=" dark:text-gray-800 my-14">
	<div className="container max-w-4xl px-4 md:px-10 py-6 mx-auto rounded-lg shadow-sm bg-[#F3F3F3] mb-8">
		<div className="flex items-center justify-between">
			<p className= "text-gray-500 font-semibold">Year: <span className="font-normal">{year}</span></p>
            <p className=" text-gray-500 font-semibold">Category: <span className="font-normal">{genre}</span></p>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{title}</a>
			<p className="mt-2">{summary}</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Read more</a>
			<div>
				<a  className="flex items-center gap-2">
                     <LuUserCircle2 className="text-[22px]"/>
					<span className="hover:underline dark:text-gray-600">{author}</span>
				</a>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default ResourcesDetails;