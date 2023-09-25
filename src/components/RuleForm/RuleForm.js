import { Checkbox, Input, Button } from '@mantine/core';
import { useState } from 'react';

const RuleForm = ({ create }) => {

  const [preset, setPreset] = useState({
    title: '',
    rule1: false,
    rule2: false,
    rele3: false
  })

  /**Тут ещё не добавлено тело конфигурации*/
  const savePreset = (event) => {
    event.preventDefault()
    const newPreset = {
      id: Date.now(),
      ...preset
    }
    create(newPreset)
    setPreset({
      title: '',
      rule1: false,
      rule2: false,
      rele3: false
    })
  }

  return (
    <form>
      <div>{preset.title}</div>
      <Input placeholder="Rules preset name"
        size="md"
        value={preset.title}
        onChange={event => setPreset({ ...preset, title: event.target.value })}
      />

      <Checkbox.Group label="Rules">
        <Checkbox color="violet" value="rule1" label="Rules1"/>
        <Checkbox color="violet" value="rule2" label="Rules2"/>
        <Checkbox color="violet" value="rule3" label="Rules3"/>
      </Checkbox.Group>

      <Button onClick={savePreset} color="violet" size="md" id="presetButton">Save</Button>
    </form>
  );
};

export default RuleForm;


