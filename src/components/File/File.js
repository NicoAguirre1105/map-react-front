import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewFile,setCurrentFileName, setCurrentLine,setCurrentPage,setRuleViolations} from '../../actions/fileAction';
import { Card, Text, Button } from '@mantine/core';
import './File.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Импортируем библиотеку axios для выполнения запросов

const File = ({ file, remove, index }) => {
  const files = useSelector((state) => state.file.files);
  const ruleViolations = useSelector((state)=> state.file.ruleViolations);
  const dispatch = useDispatch();
  const [documentReport, setDocumentReport] = useState(null);
  const currentPreset = useSelector((state)=>state.file.currentPreset)
  const handleButtonClick = () => {
    const formData = new FormData();
    formData.append('file',file);
    if(currentPreset[0]){formData.append('ruleSet',currentPreset[0])}
    else{ formData.append('ruleSet',[])}
    axios.post('http://localhost:8081/api/uploadPDF', formData)
      .then(response => {
        if(response.data.ruleViolations.length===0||response.data.ruleViolations[0].type=="System"){
          setDocumentReport(1);
        }
        else{
        setDocumentReport(response.data);        
        dispatch(setRuleViolations(response.data.ruleViolations))
        }
      })
      .catch(error => {
      setDocumentReport(1);
      });           
  };
  const handleViewFile = (fileName) => {
    dispatch(setCurrentFileName(fileName));
    dispatch(setCurrentPage(null));
    dispatch(viewFile(files[index]));
  };

  return (
    <Card className="fileItem" shadow="sm" padding="lg" radius="md" withBorder>
      <Text className="fileName">{file.name}</Text>
      <div>
        {documentReport ? (
          documentReport === 1 ? (
            <div>
              <p>0 errors</p>
            </div>
          ) : (
            <div>
              <p>{documentReport.ruleViolations.length + " errors"}</p>
              <div className='fileButtons'>
                <Link to="/ProcessFile">
                  <Button
                    className="fileButton"
                    onClick={() => handleViewFile(documentReport.name)}
                    color="violet"
                    file={files[index]}
                    variant="light"
                  >
                    Violations
                  </Button>
                </Link>
              </div>
            </div>
          )
        ) : (
          <button onClick={handleButtonClick}>Загрузить PDF и получить результат</button>
        )}
      </div>
      <div className="filesButtons">
        <Button className="fileButton" color="violet" onClick={() => remove(file)}>
          &#10008;
        </Button>
      </div>
    </Card>
  );
};

export default File;