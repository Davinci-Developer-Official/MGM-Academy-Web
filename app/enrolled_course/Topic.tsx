'use client';
import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    async function getId() {
      const id = localStorage.getItem('selected_item');
      if (id) {
        setSelectedId(id);
      }
    }
    getId();
  }, []);

  useEffect(() => {
    async function getTopics(id: string) {
      const response = await fetch(`/api/get_course_topics?id=${id}`, {
        method: 'GET',
      });
      if (!response.ok) {
        alert('Error fetching topics');
      } else {
        const data = await response.json();
        setTopics(data);
      }
    }

    if (selectedId) {
      getTopics(selectedId);
    }
  }, [selectedId]);

  return (
    <div>
      {topics.length > 0 ? (
        topics.map((topic, index) => (
          <div key={index}>
            <p>{topic.topic_name}</p>
          </div>
        ))
      ) : (
        <p>No topics available</p>
      )}
    </div>
  );
}

export default Topic;
