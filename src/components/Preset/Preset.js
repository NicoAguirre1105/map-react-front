import React from 'react';
import { Radio } from '@mantine/core';
import { Accordion } from '@mantine/core';
import './Preset.css'
import { setCurrentPreset} from '../../actions/fileAction';
import { useDispatch, useSelector } from 'react-redux';

const Preset = ({ preset, visible }) => {
    const listVisibility = (visible) ? "hidden" : ""
    const dispatch = useDispatch();
    return (
        <Accordion.Item
            className="preset"
            style={{ visibility: listVisibility }}
            value={"id" + preset.id}>
            <Accordion.Control >
                <Radio
                    color="violet"
                    value={"radio" + preset.id}
                    label={preset.title}
                    onClick={() => {
                        dispatch(setCurrentPreset(preset.body));
                    }} />                  
            </Accordion.Control>
            <Accordion.Panel style={{ overflowY: 'auto', maxHeight: '500px' }}>
            {preset.body.map((str, index) => (
        <p key={index}>{str}</p>
      ))}</Accordion.Panel>
        </Accordion.Item>
    )
}

export default Preset;
