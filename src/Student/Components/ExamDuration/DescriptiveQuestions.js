
import React ,{Component} from 'react'
import { Input } from 'antd';
const { TextArea } = Input;

let style="{height:'100vh'}";
    class DescriptiveQuestion extends React.Component {
      state = {
        value: '',
      };
    
      onChange = ({ target: { value } }) => {
        this.setState({ value });
      };
    
      render() {
        const { value } = this.state;
    
        return (
          <div style={{border:'1px solid lightslategray'}}>
            <h1 style={{paddingRight:'30px'}}>{this.props.number}. {this.props.question}</h1>
            <div style={{ margin: '24px 0' }} />
            <TextArea placeholder="توضیحات خود را در این قسمت بنویسید" autoSize={{ minRows: 4, maxRows: 10 }} />
           
          </div>
        );
      }};
      export default DescriptiveQuestion;