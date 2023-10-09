import React from 'react';
import { List, Accordion } from '@mantine/core';
import './RuleViolation.css'

const RuleViolation = ({ violations, category, categoryName }) => {
  return (
    <Accordion.Item value={categoryName + category}>
      <Accordion.Control>{categoryName} {category}</Accordion.Control>
      <Accordion.Panel>
        <List withPadding spacing="xs" >
          {violations
            .filter((v) => category === v[categoryName])
            .map(violation =>
              <div className="ruleViolationItem">
              <List.Item  onClick={() => {console.log('cringe')}}>
                {violation.title} {violation.page} {violation.section}
              </List.Item>
              </div>
            )}
        </List>
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default RuleViolation;
