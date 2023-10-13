import React, { useState } from 'react';
import { Checkbox, List } from '@mantine/core';
import { Collapse, Button } from '@mantine/core';

const Rule = ({ rule }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <List.Item>
      <Checkbox color="violet" value={rule.title} label={rule.title} />
      <Button onClick={toggleDescription}>{isOpen ? 'Hide Description' : 'Show Description'}</Button>
      {isOpen && <div>{rule.description}</div>}
    </List.Item>
  );
};

export default Rule;