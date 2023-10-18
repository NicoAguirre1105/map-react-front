import React from 'react';
import { Radio } from '@mantine/core';
import { Accordion, Text, Title } from '@mantine/core';
import './Preset.css'
import { setCurrentPreset } from '../../actions/fileAction';
import { useDispatch, useSelector } from 'react-redux';

const Preset = ({ preset, visible }) => {
    const listVisibility = visible ? "hidden" : "";
    const dispatch = useDispatch();

    return (
        <Accordion.Item
            className="preset"
            style={{ visibility: listVisibility }}
            value={"id" + preset.id}
        >
            <Accordion.Control>
                <Radio
                    color="violet"
                    value={"radio" + preset.id}
                    label={preset.title}
                    onClick={() => {
                        dispatch(setCurrentPreset(preset.body));
                    }}
                />
            </Accordion.Control>

            <Accordion.Panel style={{ maxHeight: '200px' }}>
                <Title color="dimmed"
                    order={4}>Rules
                </Title>

                <div style={{ overflowY: 'auto', maxHeight: '200px' }}>
                    {preset.body.map((str, index) => (
                        <Text color="dimmed">{str} </Text>
                    ))}
                </div>

            </Accordion.Panel>
        </Accordion.Item>
    );
}

export default Preset;