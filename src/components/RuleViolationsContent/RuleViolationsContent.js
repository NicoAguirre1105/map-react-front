
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { List, Accordion } from '@mantine/core';
import RuleViolationList from '../RuleViolationList/RuleViolationsList';
import RuleSelect from '../RuleSelect/RuleSelect';
import RuleList from '../RuleList/RuleList';
import FileView from '../FileView/FileView';
import './RuleViolationsContent.css'

const RuleViolationsContent = () => {
  const rules = [
    { title: 'Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1', type: 'warning', body: 'description' },
    { title: 'Rule2', type: 'warning', body: 'description' },
    { title: 'Rule3', type: 'error', body: 'description' },
    { title: 'Rule4', type: 'error', body: 'description' },
    { title: 'Rule5', type: 'error', body: 'description' },
  ]

  const ruleViolations = [
    { title: 'Rule1', page: '1',  line: 10 },
    { title: 'Rule1', page: '2',  line: 10 },
    { title: 'Rule2', page: '3', line: 10 },
    { title: 'Rule2', page: '4', line: 10 },
    { title: 'Rule4', page: '5', line: 10 },
    { title: 'Rule3', page: '2', line: 10 },
    { title: 'Rule5', page: '10',line: 10 },
    { title: 'Rule1', page: '2', line: 10 },
  ]

  const options = ['title', 'page']

  const [selectedRules, setSelectedRules] = useState([...rules].map(r => r.title))
  const [selectedSort, setSelectedSort] = useState('')

  const selectedRuleViolations = useMemo(() => {
     return ruleViolations
     .filter(r => selectedRules.includes(r["title"]))
  }, [selectedRules]
  );

  const categories = useMemo(() => {
    const categories = []

    selectedRuleViolations
    .forEach(violation => {
      if (!categories.includes(violation[selectedSort])) {
        categories.push(violation[selectedSort])
      }
    })

    return categories
  }, [selectedSort, selectedRules])

  const currentFile = useSelector((state) => state.file.currentFile);

  if (currentFile != null) {
    return (
      <div className="main">
        <div className='ruleList'>
          <RuleList
            value={selectedRules}
            onChange={setSelectedRules}
            rules={rules}
          />
        </div>

        <div className='pageWithSort'>

          <div className="page">
            <FileView/>
          </div>

          <div className="sortedRuleViolationsList">
            <RuleSelect
              value={selectedSort}
              onChange={setSelectedSort}
              options={[...options]}
              defaultValue={options[0]}/>

            <Accordion
              color="violet"
              variant="filled"
              chevronPosition="left"
              defaultValue="customization">
              <Accordion.Item value="customization">
                <Accordion.Control>Rule Violations</Accordion.Control>
                <Accordion.Panel>
                {selectedSort === '' ? <List withPadding spacing="xs" >
                  {selectedRuleViolations
                    .map(v => <List.Item className="ruleViolationItem">{v.title} {v.page} {v.section}</List.Item>)}
                </List> :
                  <RuleViolationList
                    violations={selectedRuleViolations}
                    categories={categories}
                    categoryName={selectedSort}
                  />
                }
              </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
}

export default RuleViolationsContent;
