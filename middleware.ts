import { NextRequest,NextResponse } from "next/server";

export function middleware(req:NextRequest,res:NextResponse){
    //getting cookies
    //const cookies = req.cookies.get('auth')?.valueOf()
    const cookies = req.cookies.getAll('auth');
   // req.cookies.delete('auth');
   // console.log('checking',req.cookies.has('auth'));
    const allcookies = req.cookies.getAll('auth');
    console.log('cookie',cookies);

    const user = req.cookies.get('user');
    
    console.log('user',user)

    //working with cookies;
    const response = NextResponse.next();

    response.cookies.set('isAuthed','true');
    console.log('res',response.cookies);
    
    if(1==1){
        return headers(req)
    }

    return NextResponse.next();
};

export function headers(req:NextRequest){
    const response = NextResponse.next({
        request:{
            headers: req.headers,
        }
    });
    response.headers.set('x-custom-auth-header','isAuthed');

    //console.log('response header',response.headers);
    return response;
}

export const config={
    matcher:['/','/academics/studentPortal/Profile'],
}

{/*console.log("middleware working");
    if(req.nextUrl.pathname.startsWith('/')){
        console.log('active')
    }*/}