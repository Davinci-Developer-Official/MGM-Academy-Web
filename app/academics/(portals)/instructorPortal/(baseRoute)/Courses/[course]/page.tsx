import GetCookie from "@/app/components/GetCookie"
import Cookies from "js-cookie"

export default function page(){
    const data = Cookies.get("current-course")
    return(<div>
        ping {data}
    </div>)
}