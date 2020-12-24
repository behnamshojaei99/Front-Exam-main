
import React from 'react'
import { Radio } from 'antd';
import "./TestQuestions.css"

let css="";

function Testquestion(Props) {
    
    const [value, setValue] = React.useState(1);
  
    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    return (
        <div className="testCard">
            <div style={{textAlign:'right'}}>
            <h1>{Props.number}. {Props.question}</h1>
            <Radio.Group onChange={onChange} value={value}>
                
            <Radio value={1}>۱){" "+Props.choices[0]}</Radio><br/>
            <Radio value={2}>۲){" "+Props.choices[1]}</Radio><br/>
            <Radio value={3}>۳){" "+Props.choices[2]}</Radio><br/>
            <Radio value={4}>۴){" "+Props.choices[3]}</Radio>
            </Radio.Group>
            </div>
          
        </div>
    )
}

export default Testquestion;
