'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaFile } from 'react-icons/fa';

interface Topics {
  topic_cover: string;
  topic_name: string;
  topic_description: string;
  topic_content: string;
  topic_completed: boolean;
}

function Topic() {
  const [topics, setTopics] = useState<Topics[]>([]);
  const [selectedId, setSelectedId] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const id = localStorage.getItem('topic_id');
    if (id) {
      setSelectedId(id);
    } else {
      setError('Failed to retrieve topic ID. Please retry.');
    }
  }, []);

  useEffect(() => {
    async function getTopics(id: string) {
      try {
        const response = await fetch(`/api/get_topic?id=${id}`, { method: 'GET' });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error fetching topics');
        }
        const data = await response.json();
        setTopics(data);
      } catch (error: any) {
        setError(error.message);
      }
    }

    if (selectedId) {
      getTopics(selectedId);
    }
  }, [selectedId]);

  return (
    <div>
      {error && <p>{error}</p>}
      {topics.length > 0 ? (
        <div className='card-body text-center '>
          {topics.map((topic: Topics, index) => (
            <div key={index} className='overflow-y-scroll h-[300px] w-[90%] mx-auto flex flex-col bg-gray-200 p-2 h-full  rounded-lg'>
              <div>
                <Image src={`/${topic.topic_cover}`} alt='cover image' width={100} height={100} />
              </div>
              <div className='card'>
                <p className='text-center font-bold text-xl underline'>Topic Name</p>
                <p className=' card-body'>{topic.topic_name}</p>
              </div>
              <div className='card'>
                <p className='text-center font-bold text-xl underline'>Topic Description</p>
                <p className='card-body'>{topic.topic_description}</p>
              </div>
              <div className='card font-bold  '>
                <p className='text-center font-bold text-xl underline '>Topic material</p>
                <div className='flex flex-row w-[60%] mx-auto p-2 mb-5 mt-5 justify-around  '>
                <FaFile size={20} className=' '/> 
                <p className=' cursor-pointer text-blue-700 hover:text-red-700 underline  tex-center  '> {topic.topic_content}</p>
                </div>
                </div>
              <div>
                {topic.topic_completed==true ? <button className='btn bg-gray-100 text-green-700  hover:bg-gray-100 ' >Mark as incompleted</button>: <button className='btn btn-success p-2 '>Mark as completed</button> }
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No topics available</p>
      )}
    </div>
  );
}

export default Topic;
