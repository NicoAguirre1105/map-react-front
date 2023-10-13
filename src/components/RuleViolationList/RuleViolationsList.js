import React from 'react';
import { Accordion } from '@mantine/core';
import RuleViolation from '../RuleViolation/RuleViolation';
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewFile,setCurrentFileName, setCurrentLine,setCurrentPage,setRuleViolations} from '../../actions/fileAction';
const RuleViolationList = ({ categoryName, categories, violations }) => {
  const dispatch = useDispatch();
 const handleClick = (page,line) =>{
dispatch(setCurrentLine(line));
dispatch(setCurrentPage(page));
}
  return (
    <Accordion  multiple variant="filled" chevronPosition="left">
      {categories.map(category =>
        <RuleViolation   violations={violations} categoryName={categoryName} category={category}/>
      )}
    </Accordion>
  )
}

export default RuleViolationList