import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {InputNumber, Row, Col,Button , List , Avatar, Modal , Divider} from 'antd' 
import { LARGE } from 'material-ui/utils/withWidth';
import { DownloadOutlined , UserOutlined} from '@ant-design/icons';
import './ExamResultView.css'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

 
   

//table data----------------------------

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: 'بهنام شجاعی', customerId: '۹۶۳۶۱۳۰۵۴', amount: "۱۷"},
      { date: 'سجادرحیمی', customerId: '۹۶۳۶۱۳۰۳۸', amount: "۱۶" },
    ],
  };
}

function Rows(props) {
  const { row } = props;
  const headcells=props.headcells
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

   //Modal controls---------------

   const [visible, setVisible] = React.useState(false);
   const [confirmLoading, setConfirmLoading] = React.useState(false);
   const [modalText, setModalText] = React.useState('Content of the modal');
 
   const showModal = () => {
     setVisible(true);
   };
 
   const handleOk = () => {
     setModalText('The modal will be closed after two seconds');
     setConfirmLoading(true);
     setTimeout(() => {
       setVisible(false);
       setConfirmLoading(false);
     }, 2000);
   };
 
   const handleCancel = () => {
     console.log('Clicked cancel button');
     setVisible(false);
   };

  return (  
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right" component="th" scope="row" style={{fontFamily:"Samim"}}>
          {row.name}
        </TableCell>
        <TableCell align="right" style={{fontFamily:"Samim"}}>{row.calories}</TableCell>
        {/* <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography  style={{flexDirection :"unset",
                        fontWeight:"600",
                        fontSize:"16px" ,
                        fontFamily:"Samim"}} align="right" variant="h6" gutterBottom component="div">
                      لیست پاسخ ها
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  {
            headcells.map((headcell) => ( <
                TableCell key = { headcell.id }
                align = "right"
                style={{flexDirection :"unset",
                fontWeight:"600",
                fontSize:"13px",
                textShadow:" 1px 1px 2px silver, 0 0 25px cyan",
                fontFamily:"Samim"
                }}
                // padding = { headcell.disablePadding ? 'none' : 'default' }
                // sortDirection = { orderBy === headcell.id ? order : false }
                 ><span>{headcell.label}</span>
                 </TableCell>
             ) )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell align="right" style={{fontFamily:"Samim"}}> 
                       <List.Item.Meta
                        avatar={
                            <Avatar size={44} icon={<UserOutlined/>} />
                        }
                        />
                      </TableCell>
                      <TableCell align="right" component="th" scope="row"  style={{fontFamily:"Samim"}}>
                        {historyRow.date}
                      </TableCell>
                      <TableCell align="right" style={{fontFamily:"Samim"}}>{historyRow.customerId}</TableCell>
                      <TableCell align="right" style={{fontFamily:"Samim"}}>{historyRow.amount}</TableCell>
                      <TableCell align="right" style={{fontFamily:"Samim"}}>
                        
                        <Button type="primary" style={{borderRadius:"15px", fontSize:"10px" }} onClick={showModal}>مشاهده پاسخ </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
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
                                  <div className="Number">سوال ۱</div>
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
                                  <div className="Number">سوال ۲</div>
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
                                  <div className="Number">سوال ۳</div>
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
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData( 'الگوریتم', 1234),
  createData('کامپایلر',4321),
  createData('هوش مصنوعی', 1234,)
];

const CollapsibleTable = props => {
    const mainHeadcells=props.mainHeadcells
    const headcells=props.headcells

  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell /> {
            mainHeadcells.map(( mainHeadcell) => ( <
                TableCell key = {  mainHeadcell.id }
                align = "right"
                
                style={{flexDirection :"unset",
                fontWeight:"600",
                fontSize:"16px",
                textShadow:" 1px 1px 2px silver, 0 0 25px cyan",
                fontFamily:"Samim"
            }}
                // padding = { headcell.disablePadding ? 'none' : 'default' }
                // sortDirection = { orderBy === headcell.id ? order : false }
                 ><span>{ mainHeadcell.label}</span>
                 </
                 TableCell>
             ) )}
          </TableRow>
        </TableHead>
        <TableBody  >
          {rows.map((row) => (
            <Rows headcells={headcells} key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CollapsibleTable