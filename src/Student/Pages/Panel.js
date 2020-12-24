import React from "react";
import Aside from "../../Shared/Sidebar/Aside"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function SidebarExample() {

    return(
        <Router>
            <Aside></Aside>
        </Router>
    )
}