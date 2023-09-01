import React from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../actions/fileAction';

const Upload = () => {
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    dispatch(uploadFile(file));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default Upload;