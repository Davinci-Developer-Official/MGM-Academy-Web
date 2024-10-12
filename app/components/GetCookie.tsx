import Cookies from "js-cookie";

interface data{
    label:string;
}

export default async function GetCookie(label:string){
    if(!label){
       const res= await Cookies.get(label);
       return res
    }

}