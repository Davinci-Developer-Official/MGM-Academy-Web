import { FaArchive, FaReply } from "react-icons/fa";


export default function Content(){
    return(
    <div className='w-[99%] mx-auto bg-red-400 h-full p-2 overflow-y-auto ' >
    {/*card*/}
    <div className='h-[150px] p-2  w-full bg-gray-200   ' >
      <div>profile</div>
      <div>finances</div>
      <div>notifications</div>
    </div>
    <div className="bg-blue-400 w-[98%] mx-auto h-[350px] p-1 mt-1 overflow-y-auto " >
      <div className="flex flex-col  bg-green-200 p-1 " >
        <div className="flex flex-row w-full p-2  justify-evenly bg-green-400 " >
        <div>courses Assignment </div>
        <div> 12:40 pm</div>
        <div>tue-12-2025</div>
        </div>
        <div className="flex flex-col bg-red-300 h-[250px] " >
            <div>Assignment 1 </div>
            <div>sender: </div>
            <p>@brianmiles</p>
            <div>Attached: </div>
            <p> no files</p>
            <p>message:</p>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit itaque eligendi facere ratione, veniam officiis consequuntur eum eaque maxime ea neque ex quia natus cupiditate vel nisi qui. Magnam!</div>
        </div>
        <div className="flex flex-row bg-blue-400  h-[30px] justify-evenly
          " >
          <button className="flex flex-row  p-1" ><FaReply size={20} /> Reply </button>
          <button className="flex flex-row  p-1" ><FaArchive size={20} /> mark as read </button>

        </div>
      </div>
    </div>
   </div>
    )
}