import React from 'react';
import { useDispatch } from 'react-redux';
import { viewFile } from '../actions/fileAction';

const File = ({ file }) => {
  const dispatch = useDispatch();

  const handleViewFile = () => {
    dispatch(viewFile(file));
  };

  return (
    <div>
      <a onClick={handleViewFile}>{file.name}</a>

    </div>
  );
};

export default File;