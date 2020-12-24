import React, { useState ,  useEffect } from 'react';
import { DatePicker } from "jalali-react-datepicker";
import {Calendar} from 'react-persian-datepicker';
import {Theme} from './CreateExamFormStyle';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { myTheme } from './CreateExamFormStyle';
import { DatePicker as DatePickerJalali} from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
import "antd/dist/antd.css";


import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  InputNumber,
  TreeSelect,
  Switch,
  ConfigProvider
} from 'antd';
const CreateExamForm = () => {

  const { Option } = Select;
  const {TextArea}=Input;
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };
  const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
  };
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeTimeValue = document.querySelector('.abc').value;
    console.log(rangeTimeValue);
    // const values = {
    //   ...fieldsValue,
    
    //   'range-time-picker': [
    //     rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
    //     rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
    //   ],
    //   'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    // };
    // console.log('Received values of form: ', values);
  };

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'GET',
  //     // headers: { 'Content-Type': 'application/json' },
  //     // body: JSON.stringify({ username, password })
  // };

  //  fetch('https://exam-system-b7a96-default-rtdb.firebaseio.com/', requestOptions)
  //     .then(Response=>{console.log(Response)})
  
  
  // })
  return (
    <>
      <Form
        wrapperCol={{ span: 18 , offset:12}}
        layout="horizental"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{direction:"rtl"}}
        onFinish={onFinish}
        
      >
        <Form.Item label="درس مورد نظر را انتخاب کنید"
        name="course"
        required
        rules={[{ required: true, message: 'لطفا درس مورد نظر را انتخاب کنید' }]}
        >
                  <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="انتخاب درس"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                      filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                      }
                    >
                      <Option value="1">کامپایلر</Option>
                      <Option value="2">هوش مصنوعی</Option>
                      <Option value="3">سیستم های شی گرا</Option>
                     
                  </Select>
          

        </Form.Item>
        
        <Form.Item label="عنوان آزمون"  
        name="title"
        required
        rules={[{ required: true, message: 'لطفا نام آزمون را وارد کنید' }]}>
          <Input style={{display:"block"}} />
        </Form.Item>
        <Form.Item label="توضیحات آزمون"
        name="description" >
          <TextArea />
        </Form.Item>
        
        <Form.Item label="تاریخ شروع آزمون"
        name="range-time-picker"
        >
          <ConfigProvider locale={fa_IR}  direction="rtl">
           <DatePickerJalali.RangePicker         className="abc"  showTime format="YYYY-MM-DD HH:mm:ss" /> 
          </ConfigProvider>
        </Form.Item>
        {/* <Form.Item label="تاریخ پایان آزمون"
        name="endDate"
        required 
        rules={[{ required: true, message: 'لطفا تاریخ پایان آزمون را انتخاب کنید' }]}
        >
          <DatePicker theme={Theme}  />
        </Form.Item > */}
        <Form.Item label="درهم سازی سوالات"
        name="randomization"
        wrapperCol={{span:4}}>
          
          <Switch 
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultUnchecked />
              
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" 
          style={{marginTop:"20px", marginRight:"155px"}}
          htmlType="submit"
          >افزودن سوالات</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateExamForm