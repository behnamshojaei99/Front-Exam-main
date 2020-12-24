import React from 'react'
import {Card} from 'antd'
import './logo.css'
import Logo from "../../assets/pics/test.png"



const logo=()=>{

    return(
    <Card className="logoCard" cover={<img src={Logo} className="circle"/> }  >
            

           
            <span className="mySpan">سامانه آزمون</span>
            
                                  
                </Card>
    )

}


export default logo