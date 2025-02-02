'use client';
import { useState } from "react";

const NotificationPost = () => {
  const [seen, setSeen] = useState(false);
  const [archived, setArchived] = useState(false);

  const category = "Assignment Submission";
  const sender = "student@example.com";
  const title = "Gender Studies Assignment 1";
  const body = "Please find the attached assignment for Gender Studies.";
  const sentAt = new Date().toISOString();

  if (archived) return null;

  return (
    <div className={`w-[98%] max-w-2xl bg-gray-100 dark:bg-gray-700 shadow-gray-200 mx-auto my-4 p-4 rounded-2xl shadow-md border ${seen ? "opacity-70" : "opacity-100"}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs px-2 py-1 bg-gray-200 rounded-md font-medium">
          {category}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-50 "> 12/01/2025 12:45 pm</span>
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-700 mb-3">{body}</p>
      <div className="text-sm text-gray-600 mb-3">From: {sender}</div>
      <div className="flex gap-2">
        <button className="text-blue-500 text-sm" onClick={() => setSeen(true)}>
          ✅ Mark as Seen
        </button>
        <button className="text-red-500 text-sm" onClick={() => setArchived(true)}>
          🗄️ Archive
        </button>
        <button className="text-green-500 text-sm">
          💬 Reply
        </button>
      </div>
    </div>
  );
};

export default NotificationPost;