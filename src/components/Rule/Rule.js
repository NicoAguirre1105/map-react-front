import React from 'react';
import { Checkbox, List } from '@mantine/core';

const Rule = ({rule}) => {
    return (
        <List.Item>
            <Checkbox color='violet' value={rule.title} label={rule.title} />
        </List.Item>
    )
}
export default Rule;
