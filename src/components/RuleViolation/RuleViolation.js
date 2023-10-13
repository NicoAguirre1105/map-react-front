import React from 'react';
import { List, Accordion } from '@mantine/core';
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewFile,setCurrentFileName, setCurrentLine,setCurrentPage,setRuleViolations,setSelectedItem} from '../../actions/fileAction';

const RuleViolation = ({ violations, category, categoryName }) => {
  const dispatch = useDispatch();
const handleClick = (page,line) =>{
dispatch(setCurrentLine(line));
dispatch(setCurrentPage(page));
}
const selectedItemId =useSelector((state) => state.file.selectedItem);
  return (
    <Accordion.Item value={categoryName + category}>
      <Accordion.Control>{categoryName} {category}</Accordion.Control>
      <Accordion.Panel>
        <List withPadding spacing="xs" >
          {violations
            .filter((v) => category === v[categoryName])
            .map(violation =>
              <List.Item onClick={()=>{ dispatch(setSelectedItem(null));dispatch(setCurrentLine(violation.line));
                dispatch(setCurrentPage(violation.page));dispatch(setSelectedItem(violation.id));}}className={selectedItemId === violation.id? 'selected-item' : ''} >
                {violation.title} 
              </List.Item>
            )}
        </List>
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default RuleViolation;
