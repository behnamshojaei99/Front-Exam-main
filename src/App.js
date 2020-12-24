import logo from './logo.svg';
import React, { PureComponent } from 'react'
import str from './Shared/Strings'
import Clock from 'react-clock'
import RecentExams from "./Teacher/RecentExams"
import ExamResult from "./Teacher/ExamResults"
import CreateExam from "./Teacher/CreateExamForm"
import CourseList from "./Shared/Tables/CollapsibleTable"

import {Layout, Divider, Col, Row} from 'antd'
import './App.css';
import Header from './Shared/Header/Header'
import Aside from './Shared/Sidebar/Aside'
import Content from './Shared/Content'
import Title from './Shared/ContentTitle/Title'
import classes from './Shared/Sidebar/Aside.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


function App() {
  // const [SideBarOpen, setSideBarOpen] = useState(true)


  // toggle=()=>{
  //   setIsLoginMode(prevMode => !prevMode);
  // }
  // let sidebarClassname = sidebarOpen ? 'sidebar open' : 'sidebar';
  // let contentClassname = sidebarOpen ? 'content open' : 'content';

  return (
    <Router>
      <Layout className="container" style={{height:'100vh'}}>
      <Aside />
      <Layout className="site-layout">  
        <Header />
        <Switch>
          <Redirect exact from="/" to="/recentExam" />
          <Route exact path="/recentExam">
            <Title name="آزمون های اخیر"/>    
            <RecentExams headcells={str.PROFESSORS_RECENT_EXAMS}  />
          </Route>
          <Route exact path="/courses">
            <Title name="لیست دروس"/>    
            <CourseList headcells={str.PROFESSORS_EXAMS_LIST} mainHeadcells={str.PROFESSORS_COURSES_LIST} />
          </Route>
          <Route exact path="/createExam">
          <Title name="ایجاد آزمون"/>    
          <CreateExam />
          </Route>
          <Route exact path="/results">
          <Title name="نتایج آزمون"/>    
            <ExamResult mainHeadcells={str.PROFESSORS_EXAMS_LIST} headcells={str.PROFESSORS_EXAMS_STUDENTS_LIST} />
          </Route>
        </Switch>

        </Layout>
          
      </Layout>
      
    </Router>
  );
}

export default App;
