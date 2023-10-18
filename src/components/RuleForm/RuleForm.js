import React, { useState } from 'react';
import { Button, Input, Paper, Tooltip, Checkbox } from '@mantine/core'; // Import Checkbox component
import { rulesFul } from '../../rules';
import './RuleForm.css';

const RuleForm = ({ create }) => {
  const [preset, setPreset] = useState({
    title: '',
    rules: [],
    body: [],
  });

  const savePreset = (event) => {
    event.preventDefault();
    const ruleTitles = preset.rules.map((rule) => rule.title);
    const newPreset = {
      id: Date.now(),
      title: preset.title,
      rules: preset.rules,
      body: ruleTitles,
    };
    create(newPreset);
    setPreset({
      title: '',
      rules: [],
      body: [],
    });
  };

  const handleRuleChange = (rule) => {
    const updatedRules = preset.rules.includes(rule)
      ? preset.rules.filter((selectedRule) => selectedRule !== rule)
      : [...preset.rules, rule];

    setPreset({
      ...preset,
      rules: updatedRules,
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
          <Tooltip
            label={rule.description}
            position="right"
            openDelay={500}
            multiline
            w={220}
            key={rule.title}
          >
            <label>
              <Checkbox
                checked={preset.rules.includes(rule)}
                onChange={() => handleRuleChange(rule)}
                label={rule.title}
              />
            </label>
          </Tooltip>
        ))}
      </div>

      <Button onClick={savePreset} color="violet" size="md" id="presetButton">
        Save
      </Button>
    </form>
  );
};

export default RuleForm;