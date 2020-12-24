
import React , {useEffect} from 'react'
import { Radio , Modal , Button, Divider} from 'antd';
import './ExamResultView.css'
import {InputNumber, Row, Col} from 'antd'
import { LARGE } from 'material-ui/utils/withWidth';
import { DownloadOutlined } from '@ant-design/icons';



function ExamResult(Props) {
    
   
   

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
    return (
    <>
       <Button onClick={showModal}>a</Button>
     
       <Modal
       style={{direction:"ltr"}}
       title="تعداد سوالات پاسخ داده شده : ۸ "
       visible={visible}
      //  onOk={handleOk}
       confirmLoading={confirmLoading}
       onCancel={handleCancel}
       width={1400}
       footer={[
        <Button type="primary" onClick={handleOk} style={{fontWeight:"600",marginRight:"9px"}}>
        ثبت نمره
      </Button>,
        <h4 style={{fontWeight:"600", direction:"rtl", display:"inline-block"}}> نمره کل : <InputNumber min={0} max={3} step={0.1} /></h4>,

        

      ]}
     >
            <div className="resultView">  
                  <Row gutter={20} style={{direction:"rtl"}}>
                    <Col lg={3}>
                        <div className="Number">سوال ۱)</div>
                    </Col>
                    <Divider type="vertical" style={{borderLeft:"2px solid silver" , height:"auto"}}/>
                    <Col lg={15}>
                        <div style={{textAlign:'right'}}>
                            <h3 style={{fontWeight:"600"}}> عنوان سوال تستی را در این قسمت مشاهده می کنید </h3>
                                
                            <h5 value={1} disabled className="testOption rightAnswer">۱){" "+"گزینه اول"}</h5>
                            <h5 value={2} disabled className="testOption ">۲){" "+"گزینه دوم"}</h5>
                            <h5 value={3} disabled className="testOption" >۳){" "+"گزینه سوم"}</h5>
                            <h5 value={4} disabled className="testOption wrongAnswer">۴){" "+"گزینه چهارم"}</h5>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="mark">
                              <h3 style={{fontWeight:"600"}}> بارم سوال :  ۳ نمره </h3>
                              <h3 style={{fontWeight:"600"}}> نمره استاد : <InputNumber min={0} max={3} step={0.1} /></h3>
                        </div>
                    </Col>
                  </Row>

                  <Row gutter={20} style={{direction:"rtl" , marginTop:"15px"}}>
                    <Col lg={3}>
                        <div className="Number">سوال ۲)</div>
                    </Col>
                    <Divider type="vertical" style={{borderLeft:"2px solid silver" , height:"auto"}}/>
                    <Col lg={15}>
                        <div style={{textAlign:'right'}}>
                            <h3 style={{fontWeight:"600"}}>عنوان سوال تشریحی را در این قسمت مشاهده می کنید </h3>
                                
                            <h5 value={1} disabled className="testOption ">پاسخ دانشجو را در این قسمت مشاهده می کنید<br/>
                            پاسخ دانشجو را در این قسمت مشاهده می کنید
                            </h5>
                            
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="mark">
                              <h3 style={{fontWeight:"600"}}> بارم سوال :  ۳ نمره </h3>
                              <h3 style={{fontWeight:"600"}}> نمره استاد : <InputNumber min={0} max={3} step={0.1} /></h3>
                        </div>
                    </Col>
                  </Row>
                  <Row gutter={20} style={{direction:"rtl" , marginTop:"15px"}}>
                    <Col lg={3}>
                        <div className="Number">سوال ۳)</div>
                    </Col>
                    <Divider type="vertical" style={{borderLeft:"2px solid silver" , height:"auto"}}/>
                    <Col lg={15}>
                        <div style={{textAlign:'right'}}>
                            <h3 style={{fontWeight:"600"}}>عنوان سوال تشریحی را در این قسمت مشاهده می کنید </h3>
                                
                            <Button type="primary" icon={<DownloadOutlined style={{paddingLeft:"5px"}}/>} size={LARGE} style={{padding:"5px"}}>
                              دانلود پاسخ دانشجو
                            </Button>
                            
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="mark">
                              <h3 style={{fontWeight:"600"}}> بارم سوال :  ۳ نمره </h3>
                              <h3 style={{fontWeight:"600"}}> نمره استاد : <InputNumber min={0} max={3} step={0.1} /></h3>
                        </div>
                    </Col>
                  </Row>
            </div>
     </Modal>
     </>
    )
}

export default ExamResult;
