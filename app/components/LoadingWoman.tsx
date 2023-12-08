import Image from "next/image";
import animation from "../../public/animated/Animation - 1701213610526.gif";

export default function LoadingWoman(){
    return(
        <>
        <section className="flex justify-center items-center w-full" >
            <div>
                <Image 
                    src={animation}
                    alt="loading animation"
                    width={56}
                    height={56}
                    className="object-contain"
                />
            </div>
        </section>
        </>
    )
}