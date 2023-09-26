import React, { useMemo } from 'react';
import { Title, RingProgress, ColorSwatch, Group, Text } from '@mantine/core';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import './Statistics.css'

const data = [
  { number: 1, word: 'Ford', count: 10 },
  { number: 2, word: 'Piu', count: 12 },
  { number: 3, word: 'Lorem', count: 5 },
  { number: 4, word: 'Apple', count: 6 },
  { number: 5, word: 'Cringe', count: 7 },
  { number: 6, word: 'ops', count: 8 },
  { number: 7, word: 'param', count: 13 },
  { number: 8, word: 'pam', count: 14 },
  { number: 9, word: 'sym', count: 16 },
  { number: 10, word: 'flexible', count: 10 },
];

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'number', 
        header: '#',
      },
      {
        accessorKey: 'word',
        header: 'Word',
      },
      {
        accessorKey: 'count',
        header: 'Count',
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data,
  });

  return <MantineReactTable table={table} />;
};


const Statistics = () => {
  

    return (
        <div className="statistics">
            <Title className="title">Words statistics</Title>
            <Text color="dimmed">1573 words</Text>
            <Example/>

            <Title className="title">Pages statistics</Title>
            <Text color="dimmed">15 pages</Text>

            <div className="pageStatisticsContent">
                <RingProgress
                    size={400}
                    thickness={70}
                    sections={[
                        { value: 15, color: 'red' },
                        { value: 40, color: 'cyan' },
                        { value: 15, color: 'yellow' },
                        { value: 30, color: 'grape' },
                    ]}
                />

                <Group className="sectionsList">
                    <div className="section">
                        <ColorSwatch className="swatch" color="#fab005" /><Text>Introduction</Text>
                    </div>
                    <div className="section">
                        <ColorSwatch className="swatch" color="#fa5252" /><Text>Table of content</Text>
                    </div>
                    <div className="section">
                        <ColorSwatch className="swatch" color="#be4bdb" /><Text>Section</Text>
                    </div>
                    <div className="section">
                        <ColorSwatch className="swatch" color="#15aabf" /><Text>Conclusion</Text>
                    </div>
                </Group>

            </div>

        </div>
    )
}

export default Statistics