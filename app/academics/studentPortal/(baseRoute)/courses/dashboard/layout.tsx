export default function Layout(props: { 
    children: React.ReactNode; 
    content: React.ReactNode;
    catalogue: React.ReactNode;
}) {
    return <div className="h-screen w-full bg-[#e1b382] mx-auto my-auto pt-[.5%] " >
    <div className="h-[9.5%] w-full  border-b-2 border-[#2d545e] " >{props.children}</div>
    <div className="w-[99.8%] h-[90%]    bg-[#2d545e]  mx-auto  flex lg:flex-row md:flex-row sm:flex-col-reverse " >
        <div className="lg:w-[80%] md:w-[74%] sm:w-[98%]   lg:h-full md:h-full sm:h-[40%]  mx-auto bg-[#e1b382] " >{props.content}</div>
        <div className="lg:w-[20%] md:w-[25%] sm:w-full lg:h-full md:h-full bg-[#e1b382] lg:overflow-y-scroll md:overflow-y-scroll   " >{props.catalogue}</div>
    </div>
    
    </div>
}