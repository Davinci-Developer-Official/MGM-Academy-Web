
import  Cookies  from "js-cookie";

interface Cookie{
    label: string;
    content: string;
  }
export default  async function CurrentItem ({label,content}:Cookie){
    
    if(content!==""){
      await Cookies.set(label,content);
    }
  
  }