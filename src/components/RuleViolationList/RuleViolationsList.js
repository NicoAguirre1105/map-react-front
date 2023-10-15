import React from 'react';
import { Accordion, ScrollArea } from '@mantine/core'; // Import ScrollArea from Mantine
import RuleViolation from '../RuleViolation/RuleViolation';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewFile, setCurrentFileName, setCurrentLine, setCurrentPage, setRuleViolations } from '../../actions/fileAction';

const RuleViolationList = ({ categoryName, categories, violations }) => {
  const dispatch = useDispatch();
  const handleClick = (page, line) => {
    dispatch(setCurrentLine(line));
    dispatch(setCurrentPage(page));
  }

  return (
    <ScrollArea h={400}> 
      <Accordion multiple variant="filled" chevronPosition="left">
        {categories.map(category =>
          <RuleViolation violations={violations} categoryName={categoryName} category={category} />
        )}
      </Accordion>
    </ScrollArea>
  )
}

export default RuleViolationList
