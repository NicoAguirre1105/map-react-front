import React from 'react';
import { Radio } from '@mantine/core';
import { Accordion } from '@mantine/core';
import './Preset.css'

const Preset = ({ preset, visible }) => {
    const listVisibility = (visible) ? "hidden" : ""

    return (
        <Accordion.Item
            className="preset"
            style={{ visibility: listVisibility }}
            value={"id" + preset.id}>
            <Accordion.Control >
                <Radio
                    color="violet"
                    value={"radio" + preset.id}
                    label={preset.title} />
            </Accordion.Control>
            <Accordion.Panel>{preset.body}</Accordion.Panel>
        </Accordion.Item>
    )
}

export default Preset;
