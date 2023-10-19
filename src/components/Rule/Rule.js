import React, { useState } from 'react';
import { Checkbox, Badge, Tooltip } from '@mantine/core';
import { Collapse, HoverCard, Button, Text, Group } from '@mantine/core';
import './Rule.css'

const Rule = ({ rule }) => {

  return (
    <Group>
      <HoverCard
        width={300}
        arrowPosition="side"
        arrowOffset={10}
        arrowSize={4}
        arrowRadius={10}
        position="right-start"
        shadow="md">
        <HoverCard.Target>
          <div className='ruleItem'>
            <Badge variant="light" color="violet" size="sm" radius="lg">{rule.type}</Badge>
            <Checkbox color="violet" value={rule.title} label={rule.title} />
          </div>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          {rule.description}
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>


  );
};

export default Rule;
