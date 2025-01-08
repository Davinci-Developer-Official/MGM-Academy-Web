import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

// Sample data with at least 12 courses
const allTopics = [
  { title: 'Gender Studies', overview: 'Gender Studies is an interdisciplinary field that examines the roles, experiences, and expectations of different genders in various contexts. It explores issues related to gender identity, gender roles, and the impact of gender on social structures and individual experiences.' },
  { title: 'Media Studies', overview: 'Media Studies involves the critical analysis of media content, industries, and audiences. It covers how media influences public opinion, shapes cultural norms, and affects individual behavior. This field also examines the production and consumption of media across different platforms.' },
  { title: 'Software Development', overview: 'Software Development is the process of designing, coding, testing, and maintaining software applications and systems. It involves various methodologies and tools to create functional and reliable software solutions that meet user needs and address specific problems.' },
  { title: 'Feminism', overview: 'Feminism is a social and political movement advocating for the rights and equality of women. It seeks to challenge and dismantle gender-based discrimination and promote equal opportunities and rights for all genders. Feminism encompasses various theories and approaches to address and rectify systemic inequalities.' },
  { title: 'Ethnic Studies', overview: 'Ethnic Studies explores the history, culture, and experiences of different ethnic groups. It examines the impact of race and ethnicity on social dynamics and promotes understanding and equity among diverse populations.' },
  { title: 'Political Science', overview: 'Political Science studies the theory and practice of politics and government. It covers political behavior, institutions, and the analysis of political systems and policies on both a domestic and international level.' },
  { title: 'Psychology', overview: 'Psychology is the scientific study of the mind and behavior. It explores mental processes, emotional states, and social interactions to understand human behavior and mental health.' },
  { title: 'Sociology', overview: 'Sociology examines the development, structure, and functioning of human society. It investigates social relationships, institutions, and societal changes to understand social behavior and interactions.' },
  { title: 'History', overview: 'History studies past events, societies, and cultures. It analyzes historical data and narratives to understand the causes and effects of significant events and trends across different periods and regions.' },
  { title: 'Philosophy', overview: 'Philosophy explores fundamental questions about existence, knowledge, values, and reason. It engages with abstract concepts and theories to understand the nature of reality and human thought.' },
  { title: 'Art History', overview: 'Art History investigates the development of visual arts throughout history. It examines artistic styles, movements, and the cultural and historical contexts in which art is created.' },
  { title: 'Economics', overview: 'Economics is the study of production, distribution, and consumption of goods and services. It analyzes how individuals and societies allocate resources and the impact of economic policies and practices.' }
];

const ITEMS_PER_PAGE = 6;

const TopicsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allTopics.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTopics = allTopics.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = async (topic: string) => {
    if (isMounted) {
      router.push(`/academics/Courses/${topic}/${topic}`);
      Cookies.set('c-course', topic);
      Cookies.set('s-check', 'loggedIn');
    }
  };

  return (
    <div className="flex flex-col items-center p-6 w-full h-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-8">Explore Course Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-screen-lg">
        {currentTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105"
          >
            <button
              onClick={() => handleClick(topic.title)}
              className="text-xl font-semibold hover:text-blue-500 hover:underline focus:outline-none"
            >
              {topic.title}
            </button>
            <p className="text-sm mt-4 leading-relaxed">{topic.overview}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg shadow-md transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          &laquo; Previous
        </button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg shadow-md transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default TopicsList;

