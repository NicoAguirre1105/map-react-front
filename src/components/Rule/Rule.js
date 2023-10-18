import React, { useState } from 'react';
import { Checkbox, Badge  } from '@mantine/core';
import { Collapse, Button } from '@mantine/core';
import './Rule.css'

const Rule = ({ rule }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
     <div className='ruleItem'>
      <Badge variant="light" color="violet" size="sm" radius="lg">{rule.type}</Badge>
      <Checkbox color="violet" value={rule.title} label={rule.title} />
      <Button color="violet" onClick={toggleDescription}>{isOpen ? 'Hide Description' : 'Show Description'}</Button>
      {isOpen && <div>{rule.description}</div>}
    </div>
  );
};

export default Rule;
