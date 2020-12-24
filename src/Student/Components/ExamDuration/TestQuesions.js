
import React from 'react'
import { Radio } from 'antd';

let css="";

function Testquestion(Props) {
    
    const [value, setValue] = React.useState(1);
  
    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    return (
        <div style={{border:'1px solid lightslategray',paddingRight:'30px',paddingBottom:'15px'}}>
            <div style={{textAlign:'right'}}>
            <h1>{Props.number}. {Props.question}</h1>
            <Radio.Group onChange={onChange} value={value}>
                
            <Radio value={1}>1){Props.choices[0]}</Radio><br/>
            <Radio value={2}>2){Props.choices[1]}</Radio><br/>
            <Radio value={3}>3){Props.choices[2]}</Radio><br/>
            <Radio value={4}>4){Props.choices[3]}</Radio>
            </Radio.Group>
            </div>
          
        </div>
    )
}

export default Testquestion;
