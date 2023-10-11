import React from 'react';
import { Checkbox, Badge } from '@mantine/core';
import './Rule.css'

const Rule = ({rule}) => {
    return (
        <div className='ruleItem'>
            <Badge variant="light" color="violet" size="sm" radius="lg">{rule.type}</Badge>
            <Checkbox color='violet' value={rule.title} label={rule.title}/>
        </div>
    )
}
export default Rule;
