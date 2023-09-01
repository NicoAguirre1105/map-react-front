import React from 'react';
import { useSelector } from 'react-redux';
import { Document, Page, pdfjs } from "react-pdf";

const FileView = () => {
  const currentFile = useSelector((state) => state.file.currentFile);
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
  
  return (
    <div>
      {currentFile && (
        <Document file={currentFile}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
};

export default FileView;