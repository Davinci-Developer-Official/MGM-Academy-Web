"use client";
import { useEffect, useState } from "react";
import Details from "./details";
import Progress from "./Progress";
import Exposure from "./Exposure";
import Terms from "./Terms";
import Sendcode from "./Sendcode";
import Verify from "./Verify";
import Password from "./PasswordEntry";
import { FaChevronCircleDown, FaChevronCircleUp, FaFile } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";

interface User {
    avatar: any;
    first_name: string;
    middle_name: string;
    last_name: string;
    username: string;
    email: string;
    gender: string;
    nationality: string;
    residence: string;
    phone_number: string;
    date_of_birth: string;
    exposure: string;
    password: string;
};

export default function Form({ setNavigation, navigation }: any) {
    const [valueNo, setValueNo] = useState(0);
    const [slide1, setSlide1] = useState(true);
    const [slide2, setSlide2] = useState(false);
    const [slide3, setSlide3] = useState(false);
    const [slide4, setSlide4] = useState(false);
    const [slide5, setSlide5] = useState(false);
    const [addPassword, setAddPassword] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [user, setUser] = useState<User>({
        avatar: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        username: '',
        email: '',
        gender: '',
        nationality: '',
        residence: '',
        phone_number: '',
        date_of_birth: '',
        exposure: '',
        password: ''
    });

    useEffect(() => {
        async function upload() {
            try {
                await axios.post('/api/add_student', user);
                alert('User successfully added!');
            } catch (error) {
                console.error(error);
                alert('Error uploading user data');
            }
        }

        function slideSwitcher() {
            if (slide1) {
                setValueNo(20);
            } else if (slide2) {
                setValueNo(40);
            } else if (slide3) {
                setValueNo(60);
            } else if (slide4) {
                setValueNo(80);
            } else if (slide5) {
                setValueNo(100);
                upload();
            }
        }

        slideSwitcher();
    }, [valueNo, slide1, slide2, slide3, slide4, slide5, user]);

    return (
        <>
            <div className='flex flex-row w-full justify-between p-4'>
                {!navigation && (
                    <button className='btn btn-ghost flex flex-col' onClick={() => setNavigation(true)}>
                        Show menu <FaChevronCircleDown size={20} />
                    </button>
                )}
                {navigation && (
                    <button className='btn btn-ghost flex flex-col' onClick={() => setNavigation(false)}>
                        <FaChevronCircleUp size={20} /> Hide menu
                    </button>
                )}
                <div className="normal-case text-xl ml-4 p-2 font-mono">Student Application</div>
                <button className='btn btn-ghost hover:cursor-none'><FaFile size={20} /></button>
            </div>
            <Progress valueNo={valueNo} />
            {slide1 && <div className="overflow-y-scroll h-screen"><Details setSlide1={setSlide1} setSlide2={setSlide2} user={user} setUser={setUser} /></div>}
            {slide2 && <div className="h-screen"><Terms setSlide1={setSlide1} setSlide2={setSlide2} setSlide3={setSlide3} /></div>}
            {slide3 && <div className="h-screen"><Exposure user={user} setUser={setUser} setSlide2={setSlide2} setSlide3={setSlide3} setSlide4={setSlide4} /></div>}
            {slide4 && <div className="h-screen"><Sendcode setSlide3={setSlide3} setSlide4={setSlide4} setSlide5={setSlide5} /></div>}
            {slide5 && <div className="h-screen"><Verify setSlide4={setSlide4} setSlide5={setSlide5} setAddPassword={setAddPassword} /></div>}
            {addPassword && <div className="h-screen"><Password setUploading={setUploading} setSlide5={setSlide5} setAddPassword={setAddPassword} user={user} setUser={setUser} /></div>}
            {uploading && (
                <div className="h-screen bg-red-400 w-full pt-20">
                    <div className="card bg-blue-500 w-[60%] mx-auto h-[300px]">
                        <p className="card-item">Welcome, {user.first_name}, to MGM</p>
                        <Link href="/academics/studentPortal/auth" className="btn btn-success w-[60%] ml-[20%]">Proceed</Link>
                    </div>
                </div>
            )}
        </>
    );
}
