
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mantine/core';
import RuleViolationList from '../RuleViolationList/RuleViolationsList';
import RuleSelect from '../RuleSelect/RuleSelect';
import RuleList from '../RuleList/RuleList';
import FileView from '../FileView/FileView';
import './RuleViolationsContent.css'

const RuleViolationsContent = () => {
  const rules = [
    { title: 'Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1Rule1', body: 'description' },
    { title: 'Rule2', body: 'description' },
    { title: 'Rule3', body: 'description' },
    { title: 'Rule4', body: 'description' },
    { title: 'Rule5', body: 'description' },
  ]

  const ruleViolations = [
    { title: 'Rule1', page: '1', section: 'introduction', line: 10 },
    { title: 'Rule1', page: '2', section: 'introduction', line: 10 },
    { title: 'Rule2', page: '3', section: 'experiments', line: 10 },
    { title: 'Rule2', page: '4', section: 'experiments', line: 10 },
    { title: 'Rule4', page: '5', section: 'conclusion', line: 10 },
    { title: 'Rule3', page: '2', section: 'conclusion', line: 10 },
    { title: 'Rule5', page: '10', section: 'conclusion', line: 10 },
    { title: 'Rule1', page: '2', section: 'conclusion', line: 10 },
  ]

  const options = ['title', 'page', 'section']

  const [selectedRules, setSelectedRules] = useState([])
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
          <RuleList 
          value={selectedRules} 
          onChange={setSelectedRules}
          rules={rules}/>

        <div className="page"><FileView/></div>

        <div className="sortedRuleViolationsList">
          <RuleSelect
            value={selectedSort}
            onChange={setSelectedSort}
            options={[...options]}
            defaultValue={options[0]} />

          {selectedSort === '' ? <List withPadding spacing="xs" >
            {selectedRuleViolations
            .map(v => <List.Item>{v.title} {v.page} {v.section}</List.Item>)}
          </List> :
            <RuleViolationList
              violations={selectedRuleViolations}
              categories={categories}
              categoryName={selectedSort}
            />
          }
        </div>
      </div>
    )
  }
}

export default RuleViolationsContent;
