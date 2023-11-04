import React from 'react';

const StudentPortalGuide = () => {
  return (
    <div className="portal-guide  " style={{
      width:"80%",
      marginLeft:"10%"
    }} >
      <p style={{
        textAlign:"center",
      }} className='text-3xl' >Student & Instructor Portal Guide</p>
      <p className='text-2xl' >Student Account</p>
      <p>Creating Your Student Account</p>
      <p>
        Accessing the student portal at the MGM Institute of Gender and Women Empowerment is an essential step in your educational journey. This portal is your gateway to a wealth of resources and support tailored to your studies in gender and women empowerment. Here's a step-by-step guide to get started:
      </p>

      {/* Step 1 */}
      <div className="step">
        <p>Step 1: Add your full names and Password</p>
        <p>
          Add you full names, secure password, your password should be a mix of uppercase and lowercase letters, numbers, and special characters to enhance security.
        </p>
      </div>

      {/* Step 2 */}
      <div className="step">
        <p>Step 2: Confirm Your Email and add phone number </p>
        <p>
          After you've filled out the registration form, you will likely receive an email at the address you provided. Open the email and click on the confirmation link to verify your email address. This step is essential to activate your account.
        </p>
      </div>

      {/* Step 3 */}
      <div className="step">
        <p>Step 3: Log In</p>
        <p>
          Once you've confirmed your email, return to the student portal page and log in using your newly created email and password. You may also be required to enter a security code or answer a security question.
        </p>
      </div>

      {/* Step 4 */}
      <div className="step">
        <p>Step 4: Explore the Student Portal</p>
        <p>
          Congratulations! You now have access to the student portal. Here, you will find a wealth of resources and features tailored to your educational needs:
        </p>
        <ul>
          <li><strong>Course Materials:</strong> Access course syllabi, lecture notes, assignments, and reading materials.</li>
          <li><strong>Communication:</strong> Communicate with professors, classmates, and support staff through messaging or discussion forums.</li>
          <li><strong>Grades and Progress:</strong> Track your academic progress, view your grades, and access your transcripts.</li>
          <li><strong>Library and Research Tools:</strong> Utilize digital libraries, databases, and research resources related to gender and women empowerment.</li>
          <li><strong>Events and Announcements:</strong> Stay informed about upcoming events, workshops, and important announcements from the institute.</li>
          <li><strong>Career Services:</strong> Explore career development resources and job placement services tailored to your field of study.</li>
          <li><strong>Personal Profile:</strong> Update your personal information, manage notifications, and customize your portal experience.</li>
        </ul>
      </div>

      {/* Step 5 */}
      <div className="step">
        <p>Step 5: Get Engaged</p>
        <p>
          Actively participate in discussions, collaborate with fellow students, seek guidance from professors, and make the most of the resources available on the portal. Engaging with the online community can enrich your learning experience and help you build a network in your field of interest.
        </p>
      </div>

      <p>
        Creating an account to access the student portal at the MGM Institute of Gender and Women Empowerment is your gateway to a world of knowledge and opportunities. Make the most of this platform to empower yourself and contribute positively to the field of gender and women empowerment.
      </p>


      {/*Instructors*/}

      <p className='text-2xl' > Instructor Account</p>
      <p>Creating Your Instructor Account</p>
      <p>
        Accessing the Instructors portal at the MGM Institute of Gender and Women Empowerment is an essential step in your educational instructor journey. This portal is your gateway for you  to create a  wealth of resources and support tailored to your students  studies in gender and women empowerment. Here's a step-by-step guide to get started:
      </p>

      {/* Step 1 */}
      <div className="step">
        <p>Step 1: Add your full names and Password</p>
        <p>
          Add your full names, secure password  your password should be a mix of uppercase and lowercase letters, numbers, and special characters to enhance security.
        </p>
      </div>

      {/* Step 2 */}
      <div className="step">
        <p>Step 2: Confirm Your Email</p>
        <p>
          After you've filled out the registration form, you will likely receive an email at the address you provided. Open the email and click on the confirmation link to verify your email address. This step is essential to activate your account.
        </p>
      </div>

      {/* Step 3 */}
      <div className="step">
        <p>Step 3: Log In</p>
        <p>
          Once you've confirmed your email, return to the instructor portal page and log in using your newly created username and password. You may also be required to enter a security code or answer a security question.
        </p>
      </div>

      {/* Step 4 */}
      <div className="step">
        <p>Step 4: Explore the Instructor Portal</p>
        <p>
          Congratulations! You now have access to the instructor portal. Here, you will create a wealth of resources and features tailored to your students educational needs:
        </p>
        <ul>
          <li><strong>Course Materials:</strong> Create course syllabi, lecture notes, assignments, and reading materials.</li>
          <li><strong>Communication:</strong> Communicate with Students through messaging or discussion forums.</li>
          <li><strong>Grades and Progress:</strong> Track your students academic progress, Add their grades, and modify their transcripts.</li>
          <li><strong>Library and Research Tools:</strong>Contribute  to digital libraries, databases, and research resources related to gender and women empowerment.</li>
          <li><strong>Events and Announcements:</strong>Be informed and  keep your students informed about upcoming events, workshops, and important announcements from the institute.</li>
          <li><strong>Personal Profile:</strong> Update your personal information, manage notifications, and customize your portal experience.</li>
        </ul>
      </div>

      

      <p>
        Creating an account to access the student portal at the MGM Institute of Gender and Women Empowerment is your gateway to a world of knowledge and opportunities. Make the most of this platform to empower yourself and contribute positively to the field of gender and women empowerment.
      </p>
    </div>
  );
};

export default StudentPortalGuide;
