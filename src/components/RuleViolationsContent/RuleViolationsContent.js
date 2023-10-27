import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { List, Accordion, ScrollArea } from '@mantine/core';
import RuleViolationList from '../RuleViolationList/RuleViolationsList';
import RuleSelect from '../RuleSelect/RuleSelect';
import RuleList from '../RuleList/RuleList';
import FileView from '../FileView/FileView';
import { rulesFul } from '../../rules';
import './RuleViolationsContent.css'
import { useDispatch } from 'react-redux';
import { setCurrentLine,setCurrentPage} from '../../actions/fileAction';
import { ActionIcon } from '@mantine/core';
import { IconAlertHexagon } from '@tabler/icons-react';
import RuleModal from '../RuleModal/RuleModal'
import FeedbackFrom from '../FeedbackForm/FeedbackForm';

const RuleViolationsContent = () => {

  const dispatch = useDispatch();
  const ruleViolations = useSelector((state)=> state.file.ruleViolations);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const rulesNotFiltred = (ruleViolations.length > 0) ? ruleViolations[0].data.map(item =>({
    title: item.message
  })) : []
  const uniqueRules = [];
  const uniqueTitles = [];
  
  rulesNotFiltred.forEach(obj => {
    const title = obj.title;
    if (!uniqueTitles.includes(title)) {
        uniqueTitles.push(title);
        uniqueRules.push(obj);
    }
});
  const rules = rulesFul.filter(item => uniqueRules.some(i => i.title === item.title));
  const targetArray = (ruleViolations.length > 0) ? ruleViolations[0].data.map(item => ({
    title: item.message,
    page: item.lines[0].page,
    section: item.lines[0].area,
    line: item.lines[0].index,
    id: JSON.stringify({
      title: item.message,
      page: item.lines[0].page,
      line: item.lines[0].index,
    }),
  })) : [];

  const options = ['title', 'page']

  const [selectedRules, setSelectedRules] = useState([...rules].map(r => r.title))
  const [selectedSort, setSelectedSort] = useState('')

  const selectedRuleViolations = useMemo(() => {
     return targetArray
     .filter(r => selectedRules.includes(r["title"]))
  }, [selectedRules]
  );

  const categories = useMemo(() => {
    const categories = []

    selectedRuleViolations
    .forEach(violation => {
      if (!categories.includes(violation[selectedSort])) {
        categories.push(violation[selectedSort])
      }
    })

    return categories
  }, [selectedSort, selectedRules])

  const currentFile = useSelector((state) => state.file.currentFile);
  const [modal, setModal] = useState(false)

  if (currentFile != null) {
    return (
      <div className="main">
      
       <div className='ruleList'>
          <RuleList 
          value={selectedRules} 
          onChange={setSelectedRules}
          rules={rules}/>
        </div>
          
        <div className='pageWithSort'>
          
        <div className="page"><FileView/></div>

        <div className="sortedRuleViolationsList">
          <RuleSelect
            value={selectedSort}
            onChange={setSelectedSort}
            options={[...options]}
            defaultValue={options[0]} />

           <Accordion
              color="violet"
              variant="filled"
              chevronPosition="left"
              defaultValue="customization">
              <Accordion.Item value="customization">
                <Accordion.Control>Rule Violations</Accordion.Control>
                <Accordion.Panel>
          {selectedSort === '' ? <List withPadding spacing="xs" >
          <ScrollArea h={560} type="never" offsetScrollbars scrollbarSize={8} scrollHideDelay={0}>
            
            {selectedRuleViolations
            .map(v => <List.Item  
              onClick={()=>{dispatch(setCurrentLine(v.line));
              dispatch(setCurrentPage(v.page));  
               setSelectedItemId(v.id);}}  
               className={selectedItemId === v.id? 'selected-item' : ''}
                 icon ={ 
                   <ActionIcon 
                   style={{border: 'solid'}}
                   size="xl" onClick={() => setModal(true)}>
                     <IconAlertHexagon />
                   </ActionIcon>
                 }
                 >
                {v.title}
                </List.Item>)}
              </ScrollArea>
          </List> :
            <RuleViolationList
              violations={selectedRuleViolations}
              categories={categories}
              categoryName={selectedSort}
            />
          }
              </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

          </div>
        </div>
        <RuleModal visible={modal} setVisible={setModal}>
          <FeedbackFrom />
        </RuleModal>
      </div>
    )
  }
}

export default RuleViolationsContent;
