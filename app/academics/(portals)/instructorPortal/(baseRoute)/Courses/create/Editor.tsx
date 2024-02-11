"use client"
import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DocumentEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onEditorStateChange = (newEditorState:any) => {
    setEditorState(newEditorState);
  };

  return (
    <Editor 
      editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={onEditorStateChange}
    />
  );
};


const EditorView = ({showEditor}:any) => {
  return (
    <div className='w-full bg-white h-screen p-4 overflow-y-scroll ' >
      <div className='h-[100px] w-full ' >
      <h1 className='font-bold text-center text-[#e1b382]  text-xl ' >MGM DOCUMENTS EDITOR</h1>
      </div>
      <DocumentEditor />
    </div>
  );
};

export default EditorView;
