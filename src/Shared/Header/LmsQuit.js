import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Card , Button} from 'antd';
import classes from'./LmsQuit.css';
import {RightSquareFilled } from '@ant-design/icons';



const lmsQuit=()=>{
    return(
            <Button style={{height:"auto" , width:"100px", marginRight:"auto", border:"none" , paddingTop:"4px"}} >

            <div className="Span">         <RightSquareFilled style={{fontSize:"24px" , paddingLeft:"5px"}}/>
LMS</div>

            </Button>
    )
}
export default lmsQuit