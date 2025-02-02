'use client';
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Notification {
  category: string;
  sender: string;
  title: string;
  body: string;
  sentAt: string;
}

const NotificationForm = () => {
    const router = useRouter();
  const [category, setCategory] = useState("Assignment Submission");
  const [sender, setSender] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notifications, setNotifications] = useState<Notification[]>([]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sender || !title || !body) return;

    const newNotification: Notification = {
      category,
      sender,
      title,
      body,
      sentAt: new Date().toLocaleString(),
    };

    setNotifications([newNotification, ...notifications]);
    setSender("");
    setTitle("");
    setBody("");
  };


  function Add(){
    router.push("/academics/instructorPortal/Notification")
  }
  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 border p-3 rounded">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded bg-gray-100  ">
          <option>Assignment Submission</option>
          <option className="flex flex-row ">Admin Messages <FaLock/></option>
          <option>Students Admission</option>
        </select>
        <input
          type="text"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="Sender Name or Email"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Message"
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded" onClick={Add}>Send</button>
      </form>
      <div className="mt-3">
        {notifications.map((note, index) => (
          <div key={index} className="border p-2 rounded mt-2">
            <small className="text-gray-500">{note.sentAt} - {note.category}</small>
            <h3 className="font-bold">{note.title}</h3>
            <p>{note.body}</p>
            <small className="text-gray-600">From: {note.sender}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationForm;