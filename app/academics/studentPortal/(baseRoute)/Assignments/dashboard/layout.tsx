export default function Layout(props: { 
    children: React.ReactNode; 
    content: React.ReactNode;
    catalogue: React.ReactNode;
}) {
    return <div className="h-screen w-full bg-gray-600 my-auto pt-[.5%] " >
    <div className="w-[99%] h-[99%] mx-auto pt-[.5%]  bg-red-400  justify-evenly flex lg:flex-row md:flex-row sm:flex-col " >
        <div className="lg:w-[78%] md:w-[58%] sm:w-[98%]   lg:h-[99%] md:h-[99%] sm:h-[40%]  mx-auto bg-blue-500 " >{props.content}</div>
        <div className="w-[20%] h-[99%] bg-green-500 " >{props.catalogue}</div>
    </div>
    
    </div>
}