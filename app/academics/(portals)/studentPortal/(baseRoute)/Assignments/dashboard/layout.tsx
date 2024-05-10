export default function Layout(props: { 
    children: React.ReactNode; 
    content: React.ReactNode;
    catalogue: React.ReactNode;
}) {
    return <div className="h-screen w-full bg-gray-600   " >
    <div className="w-full h-screen  bg-red-400  flex flex-row  " >
        <div className=" w-[70%] lg:w-[80%]  bg-blue-500 md:w-[75%] " >{props.content}</div>
        <div className="w-[30%] lg;w-[20%] md:sm-[25%] bg-green-500 " >{props.catalogue}</div>
    </div>
    
    </div>
}