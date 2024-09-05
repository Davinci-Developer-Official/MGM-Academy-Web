'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArchive, FaCheckDouble, FaDownload, FaRegClipboard, FaSearch } from 'react-icons/fa';
import { useHotkeys } from 'react-hotkeys-hook';
import Info from './coursesInfo';

import ba from "@/public/placeholders/ba.jpeg";
import bb from "@/public/placeholders/bb.jpeg";
import bc from "@/public/placeholders/bc.jpeg";

function Segment() {
  const items = [
    {
      id: 1,
      courseName: "Sub-poena drafting",
      courseInstructor: "John Lenon",
      coverImage: ba,
      status: "active"
    },
    {
      id: 2,
      courseName: "Litigation drafting",
      courseInstructor: "Grace Lenon",
      coverImage: bb,
      status: "completed"
    },
    {
      id: 3,
      courseName: "UI Design drafting",
      courseInstructor: "Thomas Mithamo",
      coverImage: bc,
      status: "active"
    },
    {
      id: 4,
      courseName: "Mental Health",
      courseInstructor: "Grace Williams",
      coverImage: ba,
      status: "archived"
    },
    {
      id: 5,
      courseName: "Mistrial",
      courseInstructor: "Miss Kim",
      coverImage: bb,
      status: "completed"
    }
  ];

  const [courseStatus, setCourseStatus] = useState("active");
  const filteredRecords = items.filter(item => item.status === courseStatus);

  const [progress, showProgress] = useState(false);
  const [click, setClick] = useState(0);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [visibleMenu, setVisibleMenu] = useState<number | null>(null);
  const [searchBar, showSearchBar] = useState(false);
  const [time, setTime] = useState('');
  const [user, setUser] = useState({ email: "" });
  const [useError, setUserError] = useState(false);

  const handleCheckboxChange = (id: number) => {
    setSelectedItems(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(item => item !== id)
        : [...prevSelected, id]
    );
  };

  const handleOptionClick = (action: string, id: number) => {
    const index = items.findIndex(item => item.id === id);

    if (index !== -1) {
      if (action === 'completed') {
        items[index].status = "completed";
      } else if (action === 'archive') {
        items[index].status = "archived";
      }
      setCourseStatus(courseStatus); // Force re-render to update filteredRecords
    }

    setVisibleMenu(null);
  };

  const handleEllipsisClick = (id: number) => {
    setVisibleMenu(visibleMenu === id ? null : id);
  };

  useHotkeys("ctrl+v", () => {
    showSearchBar(true);
  });

  const updateTime = useCallback(() => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    setTime(formattedTime);
  }, []);

  useEffect(() => {
    const emailAddress = localStorage.getItem("s-usename") || sessionStorage.getItem("s-username");
    if (emailAddress) {
      setUser({ email: JSON.parse(emailAddress) });
    } else {
      setUserError(true);
    }
  }, [click]);

  useEffect(() => {
    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, [updateTime]);

  let currentDate = new Date();
  let formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${currentDate.getFullYear()}`;

  return (
    <div className='background w-full rounded-lg border inset border-b-[#e97902] h-full flex flex-col p-1'>
      <div className="title p-2 text-center font-serif font-bold flex flex-row justify-evenly  text-xl w-[100%] mx-auto">
        <p>{formattedDate}</p>
        <p>Hello  👋 {user.email} </p>
        <p>{time}</p>
      </div>

      <div className='w-full justify-center flex flex-col p-1'>
        <p className='text-center text-lg p-1 uppercase font-bold'>student dashboard</p>
        <div className='background w-full h-fit flex flex-col p-1 mt-1'>
          <div className="join w-[80%] mx-auto mt-1 flex flex-col lg:flex-row gap-2">
            <input
              className="input input-bordered join-item w-full lg:w-[80%] max-w-lg"
              placeholder="Search"
              onClick={() => {
                showSearchBar(true);
                setClick(3);
                if (click === 3) {
                  showSearchBar(false);
                  setClick(0);
                }
              }}
            />
            <select className="select select-bordered join-item lg:w-[20%] max-w-xs">
              <option disabled selected>Filter</option>
              <option>All</option>
              <option>courses</option>
              <option>instructors</option>
            </select>
            <div className="indicator">
              {/*<span className="indicator-item badge badge-secondary">new</span>*/}
              <button className="btn text-black join-item">
                <FaSearch size={20} />
              </button>
            </div>
          </div>

          {searchBar && (
            <div className='flex flex-col bg-purple-400 w-[95%] mx-auto h-[400px] mt-2 overflow-y-auto'>
              <p>search param</p>
            </div>
          )}
        </div>


        <Info />

        <button
          className="btn w-[290px] mx-auto text-black hover:bg-gray-300 text-xl font-medium bg-white text-center lg:tooltip"
          data-tip="Get detailed information about your progress"
          onClick={() => {
            setClick(1);
            showProgress(true);
            if (progress && click === 1) {
              showProgress(false);
            }
          }}
        >
          Track your progress
        </button>
      </div>

      {progress && (
        <div className='flex flex-col h-[400px] mt-4'>
          <div className="text-sm breadcrumbs p-2">
            <ul className='justify-center'>
              <li>
                <a onClick={() => setCourseStatus("active")}>
                  <FaRegClipboard className="w-4 h-4 stroke-current" />
                  Current Courses
                </a>
              </li>
              <li>
                <a onClick={() => setCourseStatus("completed")}>
                  <FaRegClipboard className="w-4 h-4 stroke-current" />
                  Previous Courses
                </a>
              </li>
              <li>
                <a onClick={() => setCourseStatus("archived")}>
                  <FaArchive className="w-4 h-4 stroke-current" />
                  Archived
                </a>
              </li>
              <li>
                <a>
                  <FaDownload className="w-4 h-4 stroke-current" />
                  Transcript
                </a>
              </li>
            </ul>
          </div>

          <div className="overflow-y-scroll p-2">
            <table className="table w-full">
              <thead>
                <tr className='text-black text-lg font-serif'>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Cover Image</th>
                  <th>Course Name</th>
                  <th>Course Instructor</th>
                  <th>Course Completion%</th>
                  <th>Assignment Completion%</th>
                  <th>Quizzes Completion%</th>
                  <th>CAT Completion%</th>
                  <th>Attendance%</th>
                  <th>Average Grade</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='w-full'>
                {filteredRecords.map(item => (
                  <tr key={item.id} className='text-black text-lg font-serif'>
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox bg-gray-400"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </label>
                    </td>
                    <td className='h-[100px]'>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image src={item.coverImage} alt={item.courseName} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.courseName}</td>
                    <td>{item.courseInstructor}</td>
                    <td>25%</td>
                    <td>40%</td>
                    <td>76%</td>
                    <td>86%</td>
                    <td>43%</td>
                    <td>53%</td>
                    <td>
                      <div className="relative">
                        <button
                          className="btn"
                          onClick={() => handleEllipsisClick(item.id)}
                        >
                          ...
                        </button>
                        {visibleMenu === item.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                            <button
                              className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                              onClick={() => handleOptionClick('completed', item.id)}
                            >
                              Mark as Completed
                            </button>
                            <button
                              className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                              onClick={() => handleOptionClick('archive', item.id)}
                            >
                              Archive
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className='text-black font-serif '>
                <tr>
                  <th></th>
                  <th>Cover Image</th>
                  <th>Course Name</th>
                  <th>Course Instructor</th>
                  <th>Course Completion%</th>
                  <th>Assignment Completion%</th>
                  <th>Quizzes Completion%</th>
                  <th>CAT Completion%</th>
                  <th>Attendance%</th>
                  <th>Average Grade</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Segment;
