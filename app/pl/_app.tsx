import type{AppProps}from 'next/app';
import React,{ReactElement,ReactNode} from 'react';
import { Component } from 'react';

import{NextPage}from"next";

export default function MyApp({Component,pageProps}:AppProps){
    return(
        <div>
            <nav>wreck</nav>
            <Component {...pageProps} />
        </div>
    )
}