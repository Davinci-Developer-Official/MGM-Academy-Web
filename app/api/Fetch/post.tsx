'use server';

//import { ProfileData } from '../academics/studentPortal/(baseRoute)/Settings/profile/form';

export interface ProfileData{
    avatar:string ,
    username:string,
    email:string,
    phonenumber:string,
    biography:string,
    password:string
}
interface profile{
    data:ProfileData
}
export async function PostProfileData(url:string,index:number,formData:ProfileData){
    const response = await fetch(url,{
        method:"POST",
        body:JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    })


}