
import { useSelector } from 'react-redux';
import React from 'react'; 
import Upload from '../components/Upload';
import FileList from '../components/FileList'
import FileView from '../components/FileView';
import { Document, Page, pdfjs } from "react-pdf";
const Download = () => { 
  const currentFile = useSelector((state) => state.file.currentFile);
 
if(currentFile!=null){
  return(

<FileView/>

  )
}
  return ( 

    <div> 
     <Upload/>
     <FileList/>
    </div> 

  ); 
}; 

  

export default Download; 