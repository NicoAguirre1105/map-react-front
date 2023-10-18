import React from 'react';
import { List, Accordion } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLine, setCurrentPage, setSelectedItem} from '../../actions/fileAction';
import './RuleViolation.css';

function RuleViolation({ categoryName, category, violations }) {
  const dispatch = useDispatch();
  const selectedItemId = useSelector((state) => state.file.selectedItem);

  return (
    <Accordion.Item value={categoryName + category}>
      <Accordion.Control>
        {categoryName} {category}
      </Accordion.Control>
      <Accordion.Panel>
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <List withPadding spacing="xs">
            {violations
              .filter((v) => category === v[categoryName])
              .map((violation) => (
                <List.Item
                  onClick={() => {
                    dispatch(setSelectedItem(null));
                    dispatch(setCurrentLine(violation.line));
                    dispatch(setCurrentPage(violation.page));
                    dispatch(setSelectedItem(violation.id));
                  }}
                  className={selectedItemId === violation.id ? 'selected-item' : ''}
                >
                  {violation.title}
                </List.Item>
              ))}
          </List>
        </div>

      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default RuleViolation;