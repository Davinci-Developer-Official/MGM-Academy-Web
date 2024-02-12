import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DynamicEditor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false // Disable SSR for this component
});

const DocumentEditor = () => {
  const [editorState, setEditorState] = useState(() => null);

  const onEditorStateChange = (newEditorState:any) => {
    setEditorState(newEditorState);
  };

  return (
    <DynamicEditor 
      editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={onEditorStateChange}
    />
  );
};

const EditorView = () => {
  return (
    <div className='w-full bg-white h-screen p-4 overflow-y-scroll'>
      <div className='h-[100px] w-full'>
        <h1 className='font-bold text-center text-[#e1b382] text-xl'>MGM DOCUMENTS EDITOR</h1>
      </div>
      <DocumentEditor />
    </div>
  );
};

export default EditorView;
