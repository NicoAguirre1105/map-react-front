import React from 'react';
import { Radio, Accordion, ScrollArea } from '@mantine/core';
import Preset from '../Preset/Preset';
import './PresetsList.css';
const PresetList = ({ presets, visible }) => {
    return (
        <div className="presetsList" >
            <Accordion multiple variant="contained">
            <ScrollArea h={850} type="never" offsetScrollbars scrollbarSize={8} scrollHideDelay={0}>
                <Radio.Group>
                    {presets.map(preset => (
                        <Preset preset={preset} visible={visible} key={preset.id} />
                    ))}
                </Radio.Group>
                </ScrollArea>
            </Accordion>
        </div>
    );
};

export default PresetList;