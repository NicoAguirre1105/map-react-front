import React from 'react';
import { useSelector } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
import './FileView.css'

const FileView = () => {
  const currentFile = useSelector((state) => state.file.currentFile);
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
  
  return (
    <div className="filePage">
      {currentFile && (
        <Document file={currentFile}>
          <Page
          renderTextLayer={false} wrap={true} pageNumber={1} />
          <Page renderTextLayer={false} wrap={true} pageNumber={2} />
        </Document>
      )}
    </div>
  );
};

export default FileView;