import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewFile } from '../../actions/fileAction';
import { Card, Text, Button } from '@mantine/core';
import './File.css'

const File = ({ file, remove, index }) => {
  const files = useSelector((state) => state.file.files);
  const dispatch = useDispatch();

  const handleViewFile = () => {
    dispatch(viewFile(files[index]));
  };

  return (
    <Card className="fileItem"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder>

      <Text className="fileName">{file.name} </Text>

      <div className="filesButtons">

        <Link to="/ProcessFile">
          <Button className="fileButton"
            onClick={handleViewFile}
            color="violet"
            file={files[index]}
            variant="light">
            Violations
          </Button>
        </Link>

        <Button className="fileButton"
          color="violet"
          onClick={() => remove(file)}>
          &#10008;
        </Button>

      </div>

    </Card>

  );
};

export default File;
