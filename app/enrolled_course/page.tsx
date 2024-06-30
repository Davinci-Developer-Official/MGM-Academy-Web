import React from 'react';
import Enrolled_List from './Enrolled_List';
import Enrolled_Course from './Enrolled_Course';
import Topic from './Topic'
import AddTopic from'./AddTopic';
import AddCourse from './AddCourse';

function page() {
  return (
    <div>
      <AddCourse/>
      <AddTopic/>
      <Enrolled_List/>
      <Enrolled_Course/>
      <Topic/>
    </div>
  )
}

export default page
