import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DescriptionIcon from '@mui/icons-material/Description';
import TaskIcon from '@mui/icons-material/Task';
import GroupIcon from '@mui/icons-material/Group';
import Mytask from "./mytask";
import Team from "./team";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Newproj from "./newproj";
import './addproject.css';
import Logout from "./logout";
import NotificationsIcon from '@mui/icons-material/Notifications';

function Addproject(props) {
    return (
        <div>
        <BrowserRouter>
            <Navbar className="navv" variant="light">
                <Container>
                    <Nav className="me-auto icn">
                        <NavLink style={isActive => ({color: isActive ? "grey" : "blue" })} exact to='/project' className="pad"><DescriptionIcon />File</NavLink>
                        <NavLink style={isActive => ({color: isActive ? "grey" : "blue" })} to='/mytask' className="pad"><TaskIcon />Mytask</NavLink>
                        <NavLink style={isActive => ({color: isActive ? "grey" : "blue" })} to='/team' className="pad"><GroupIcon />Team</NavLink>
                    </Nav>
                    <NotificationsIcon color="disabled"/>
                    <AccountCircleIcon color="disabled"/>
                    <span style={{marginLeft : 5 , fontSize: 20 , color: 'grey' }}>Sahil Dixit</span>
                    <Logout className='logout'/>
                </Container>
            </Navbar>
            <Routes>
                    <Route exact path="/project" element={<Newproj />} />
                    <Route exact path="/mytask" element={<Mytask />} />
                    <Route exact path="/team" element={<Team />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Addproject;