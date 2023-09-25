import React from 'react';
import { Checkbox, Accordion, List } from '@mantine/core';
import Rule from '../Rule/Rule.js';
import './RuleList.css'

const RuleList = ({ rules, value, onChange }) => {
  return (
    <div className="rulesList">
      <Accordion
        color="violet"
        variant="filled"
        chevronPosition="left"
        defaultValue="customization">
        <Accordion.Item value="customization">
          <Accordion.Control>Rules</Accordion.Control>
          <Accordion.Panel>
            <List withPadding spacing="xs">
              <Checkbox.Group size="lg" value={value} onChange={onChange}>
                {rules.map(rule =>
                  <Rule rule={rule} />
                )}
              </Checkbox.Group>
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default RuleList
