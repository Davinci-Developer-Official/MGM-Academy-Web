'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Topics {
  course_id:any;
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
  const [newTopic, setNewTopic] = useState<Topics>({
    course_id:selectedId,
    topic_cover: '',
    topic_name: '',
    topic_description: '',
    topic_content: '',
    topic_completed: false,
  });

  useEffect(() => {
    const id = localStorage.getItem('selected_item');
    if (id) {
      setSelectedId(JSON.parse(id));
    } else {
      setError('Failed to retrieve topic ID. Please retry.');
    }
  }, []);

 

  async function handleAddTopic(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await fetch('/api/add_topic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTopic),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error adding topic');
      }
      const data = await response.json();
      setTopics([...topics, data]);
      setNewTopic({
        course_id:'',
        topic_cover: '',
        topic_name: '',
        topic_description: '',
        topic_content: '',
        topic_completed: false,
      });
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <div className='flex flex-col h-[400px] w-[80%] mx-auto  p-2 overflow-y-scroll ' >
      {error && <p>{error}</p>}
      <form onSubmit={handleAddTopic} className='w-[90%] mx-auto bg-blue-100 h-fit rounded-lg '>
        <h1 className=' text-center font-bold p-2 text-xl '> Add New Topic </h1>
        <div className='flex flex-col p-2  '>
        <p className='text-center  '>Topic Cover</p>
        <input
          type="text"
          placeholder="Topic Cover"
          className='h-[50px] w-[80%] mx-auto '
          value={newTopic.topic_cover}
          onChange={(e) => setNewTopic({ ...newTopic, topic_cover: e.target.value })}
        />
        </div>
        <div className='flex flex-col p-2  '>
        <p className='text-center  '> Topic Name </p>
        <input
          type="text"
          placeholder="Topic Name"
          className='h-[50px] w-[80%] mx-auto '
          value={newTopic.topic_name}
          onChange={(e) => setNewTopic({ ...newTopic, topic_name: e.target.value })}
        />
        </div>
        <div className='flex flex-col p-2  '>
        <p className='text-center  '> Topic Description </p>
        <textarea
          placeholder="Topic Description"
          value={newTopic.topic_content}
          className='h-[50px] w-[80%] mx-auto '
          onChange={(e) => setNewTopic({ ...newTopic, topic_description: e.target.value })}
        />
        </div>
        <div className='flex flex-col p-2  '>
        <p className='text-center  '>Topic content</p>
        <textarea
          placeholder="Topic Content"
          value={newTopic.topic_content}
          className='h-[50px] w-[80%] mx-auto '
          onChange={(e) => setNewTopic({ ...newTopic, topic_content: e.target.value })}
        />
        </div>
        <button 
        className='btn btn-success w-[60%]  ml-[20%] mt-5 mb-5   '
        type="submit">Add Topic</button>
      </form>
      
    </div>
  );
}

export default Topic;
