import React from 'react';
import { useSelector } from 'react-redux';
import File from './File';

const FileList = () => {
  const files = useSelector((state) => state.file.files);

  return (
    <div  className="list"  >
      {files.map((file) => (
        <a>
        <File key={file.name} file={file} />
        </a>
      ))}
    </div>
  );
};

export default FileList;