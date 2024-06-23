'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface User {
    usernames: string;
    gender: string;
    email: string;
    phonenumber: string;
    nationality: string;
    verified: boolean;
    password: string;
}

function AddUser() {
    const [user, setUser] = useState<User>({
        usernames: "",
        gender: "",
        email: "",
        phonenumber: "",
        nationality: "",
        verified: false,
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setUser((prevUser) => ({
                ...prevUser,
                [name]: (e.target as HTMLInputElement).checked
            }));
        } else {
            setUser((prevUser) => ({
                ...prevUser,
                [name]: value
            }));
        }
    };

    const validateForm = () => {
        if (!user.usernames || !user.gender || !user.email || !user.phonenumber || !user.nationality || !user.password) {
            alert('All fields except "verified" must be filled out');
            return false;
        }
        return true;
    };

    async function upload(e: FormEvent) {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        const response = await fetch('/api/add_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_names: user.usernames,
                user_gender: user.gender,
                user_email: user.email,
                user_phonenumber: user.phonenumber,
                user_nation: user.nationality,
                user_verified: user.verified,
                user_password: user.password
            })
        });
        if (response.ok) {
            alert('User added successfully');
        } else {
            alert('Failed to add user');
        }
    }

    return (
        <form onSubmit={upload} className='flex flex-col w-[80%] mx-auto bg-blue-500 mt-5 card h-auto p-5 rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold text-center text-white mb-4'>Create Account</h1>

            <div className='mb-4'>
                <label className='block text-white mb-2'>Name</label>
                <input
                    type='text'
                    name='usernames'
                    placeholder='Your full names / username ie changable in portal '
                    className='w-full p-2 border border-gray-300 rounded bg-black text-white'
                    onChange={handleChange}
                    value={user.usernames}
                />
            </div>

            <div className='mb-4'>
                <label className='block text-white mb-2'> Gender</label>
                <input
                    list='genders'
                    name='gender'
                    placeholder='Your gender'
                    className='w-full p-2 border border-gray-300 rounded bg-black text-white '
                    onChange={handleChange}
                    value={user.gender}
                />
                <datalist id='genders'>
                    <option value="Male" />
                    <option value="Female"/>
                </datalist>
            </div>

            <div className='mb-4'>
                <label className='block text-white mb-2'> Email</label>
                <input
                    type='email'
                    name='email'
                    placeholder='Your email'
                    className='w-full p-2 border border-gray-300 rounded bg-black text-white '
                    onChange={handleChange}
                    value={user.email}
                />
            </div>

            <div className='mb-4'>
                <label className='block text-white mb-2'> Phone Number</label>
                <input
                    type='text'
                    name='phonenumber'
                    placeholder='Your phone number'
                    className='w-full p-2 border border-gray-300 rounded bg-black text-white ' 
                    onChange={handleChange}
                    value={user.phonenumber}
                />
            </div>

            <div className='mb-4'>
                <label className='block text-white mb-2'> Nation of Residence</label>
                <input
                    type='text'
                    name='nationality'
                    placeholder='Your Current nation of residence '
                    className='w-full p-2 border border-gray-300 rounded bg-black text-white'
                    onChange={handleChange}
                    value={user.nationality}
                />
            </div>

            <div className='mb-4'>
                <label className='block text-white mb-2'>Your Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Your password'
                    className='w-full p-2 border border-gray-300 rounded bg-black text-white '
                    onChange={handleChange}
                    value={user.password}
                />
            </div>

            <div className='flex items-center mb-4'>
                <div className='flex items-center'>
                <input
                        type='checkbox'
                        name='verified'
                        className='form-checkbox h-5 w-5 text-indigo-600'
                        onChange={handleChange}
                        checked={user.verified}
                    />
                <label className='text-white mr-2'>Register as </label>
                
                
                <span className='text-white '>an Instructor </span>
                    
                </div>
            </div>

            <button type='submit' className='w-full p-2 bg-green-500 text-white font-bold rounded hover:bg-green-700'>
                sign in
            </button>
        </form>
    );
}

export default AddUser;
