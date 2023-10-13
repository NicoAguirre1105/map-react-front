import { Button, Input, Badge, Paper } from '@mantine/core';
import { useState } from 'react';
import { rulesFul } from '../../rules';
import './RuleForm.css'
import { useDispatch } from 'react-redux';
const RuleForm = ({ create }) => {
  const [preset, setPreset] = useState({
    title: '',
    rules: [],
    body: []
  });
  const savePreset = (event) => {
    event.preventDefault();
    const ruleTitles = preset.rules.map((rule) => rule.title);
    const newPreset = {
      id: Date.now(),
      title: preset.title,
      rules: preset.rules,
      body: ruleTitles
    };
    create(newPreset);
    setPreset({
      title: '',
      rules: [],
      body: []
    });
  };

  const handleRuleChange = (rule) => {
    const updatedRules = preset.rules.includes(rule)
      ? preset.rules.filter((selectedRule) => selectedRule !== rule)
      : [...preset.rules, rule];

    setPreset({
      ...preset,
      rules: updatedRules
    });
  };

  return (
    <form>
      <Input
        placeholder="Rules preset name"
        size="md"
        value={preset.title}
        onChange={(event) => setPreset({ ...preset, title: event.target.value })}
      />
  
      <div className="rules-container">
        {rulesFul.map((rule) => (
          <Paper padding="md" className={preset.rules.includes(rule) ? 'rule-selected' : null} onClick={() => handleRuleChange(rule)} key={rule.title}>
            {rule.title}
          </Paper>
        ))}
      </div>

      <Button onClick={savePreset} color="violet" size="md" id="presetButton">
        Save
      </Button>
    </form>
  );
};

export default RuleForm;