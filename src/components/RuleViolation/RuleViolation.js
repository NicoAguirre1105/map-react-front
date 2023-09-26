import React from 'react';
import { List, Accordion } from '@mantine/core';

const RuleViolation = ({ violations, category, categoryName }) => {
  return (
    <Accordion.Item value={categoryName + category}>
      <Accordion.Control>{categoryName} {category}</Accordion.Control>
      <Accordion.Panel>
        <List withPadding spacing="xs" >
          {violations
            .filter((v) => category === v[categoryName])
            .map(violation =>
              <List.Item>
                {violation.title} {violation.page} {violation.section}
              </List.Item>
            )}
        </List>
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default RuleViolation;
