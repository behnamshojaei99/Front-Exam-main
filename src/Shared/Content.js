import React, { Component } from 'react';
import {Layout} from 'antd';
import ColapseTable from './Tables/CollapsibleTable'
import DataTable from '../Teacher/RecentExams'
import str from './Strings'
import classes from './Content.module.css';
import date from './jDate';
import Form from '../Teacher/CreateExamForm'
import Test from '../Student/Components/ExamDuration/TestQuestions'
import Desc from '../Student/Components/ExamDuration/DescriptiveQuestions'
import Ex from '../Teacher/ExamResults'
class Content extends Component {

    
    render(){
       
        const {Content} = Layout;
        return (
            <Content className={classes.content}>
                {/* <div className={classes.header}>
                    <h1>سامانه آزمون</h1>
                    <date></date>
                </div> */}

                {/* <Test choices={["a","b","c","d"]}/> */}
                 <ColapseTable headcells={str.STUDENTS_RECENT_EXAMS}  /> 
                {/* <Form /> */}
                {/* <Test choices={["a","b","c","d"]}/>
                <Desc /> */}
                
                {/* <Ex mainHeadcells={str.PROFESSORS_EXAMS_LIST} headcells={str.PROFESSORS_EXAMS_STUDENTS_LIST} /> */}
            </Content>
            
        )
    }
}

export default Content;