import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Button, TextInput, Text, ScrollArea, Checkbox, Group, Accordion } from '@mantine/core';
import { rulesFul } from '../../rules';
import './RuleForm.css';

const RuleForm = ({ create }) => {

  const formRules = []
  rulesFul.map(rule => {
    const curRule = {
      title: `${rule.title}`,
      checked: false
    }
    formRules.push(curRule)
  }
  )
  const form = useForm({
    initialValues: {
      title: '',
      rules: formRules
    },

    validate: {
      title: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
    },
  });

  const [preset, setPreset] = useState({
    id: Date.now(),
    title: '',
    rules: [],
  });

  const savePreset = ({ title, rules }) => {
    const ruleTitles = rules.filter(rule => rule.checked === true).map(rule => rule.title);
    const newPreset = {
      id: Date.now(),
      title: title,
      rules: ruleTitles,
    };

    create(newPreset);
    setPreset({
      id: Date.now(),
      title: '',
      rules: [],
    });
  };

  return (
    <form onSubmit={form.onSubmit(values => savePreset(values))}>
      <TextInput
        placeholder="Rules preset name"
        size="md"
        {...form.getInputProps('title')}
      />

      <div className="rules-container">
      <ScrollArea h={550} offsetScrollbars scrollbarSize={4}>
      <Accordion style={{width: 'calc(180px + 495 * (100vw / 1280))'}}variant="contained">
        {rulesFul.map((rule, index) => (
              <Accordion.Item
                value={"id" + index}
                >
                <Accordion.Control>
                  <Checkbox
                    color='violet'
                    {...form.getInputProps(`rules.${index}.checked`, { type: 'checkbox' })}
                    label={rule.title}
                    value={"id" + index}
                  />
                </Accordion.Control>

                <Accordion.Panel >
                    <Text color="dimmed">{rule.description} </Text>
                </Accordion.Panel>
              </Accordion.Item>
        ))}
         </Accordion>
         </ScrollArea>
      </div>

      <Group justify="flex-end" mt="md">
        <Button type="submit" color="violet" size="md" id="presetButton">
          Save
        </Button>
      </Group>
    </form>
  );
};

export default RuleForm;