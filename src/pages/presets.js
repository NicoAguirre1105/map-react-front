import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import RuleInput from '../components/RuleInput/RuleInput';
import RuleForm from '../components/RuleForm/RuleForm';
import RuleModal from '../components/RuleModal/RuleModal'
import PresetList from '../components/PresetsList/PresetList';
import ListContainer from '../components/ListContainer/ListContainer';

const Presets = () => {
    const [presets, setPresets] = useState([
        [
            { id: 0, title: "Rles1222", body: ["configuration3","lol"] },
            { id: 1, title: "abcd2ddddd", body: ["configuration2","lol"] },
            { id: 2, title: "Rules3", body: ["configuration1","lol"] }
          ]
    ])


    useEffect(() => {
        if (localStorage.getItem('presets'))
            setPresets(JSON.parse(localStorage.getItem('presets')))
    }, [])

    const [modal, setModal] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const selectedPresets = useMemo(() => {
        return presets.filter((preset) => {if (preset && preset.title) {
            return preset.title.toLowerCase().includes(searchQuery.toLowerCase());
          }
          return false;})
    }, [searchQuery, presets])

    const createPreset = (newPreset) => {
        setPresets([...presets, newPreset])
        localStorage.setItem('presets', JSON.stringify([...presets, newPreset]))
        setModal(false)
    }
    const searchVisibility = (modal) ? "hidden" : ""

    const buttons = [
        <Link to="/Download">
            <Button
                className="listButton"
                color="violet"
                size="md">
                Go to upload
            </Button>
        </Link>,

        <Button
            className="listButton"
            onClick={() => setModal(true)}
            color="violet"
            size="md">
            Add Preset
        </Button>
    ]

    const search =
        <RuleInput
            style={{ visibility: searchVisibility }}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />

    const presetsList = <PresetList presets={selectedPresets} visible={modal}/>

    return (
        <div>
            <ListContainer
                title="Rule Presets"
                buttons={buttons}
                search={search}
                list={presetsList}
            />
            <RuleModal visible={modal} setVisible={setModal}>
                <RuleForm create={createPreset}/>
            </RuleModal>
        </div>
    )
}

export default Presets;
