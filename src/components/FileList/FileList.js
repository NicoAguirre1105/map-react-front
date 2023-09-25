import React from 'react';
import File from '../File/File';
import './FileList.css'

const FileList = ({ files, remove }) => {

  return (
    <div className="fileList">
      {files.map((file, index) => (
        <File key={file.name} file={file} remove={remove} index={index}/>
      ))}
    </div>
  );
};

export default FileList;
