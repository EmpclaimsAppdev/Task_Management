import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DescriptionIcon from '@mui/icons-material/Description';
import TaskIcon from '@mui/icons-material/Task';
import GroupIcon from '@mui/icons-material/Group';
import TextField from "@mui/material/TextField";
import Cards from "../TL/cards";
import Mytask from "./mytask ";
// import Team from "./team";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Newproj from "./newproj";
// import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';


function Executive(props) {
    return (
        <div>
        <BrowserRouter>
            <Navbar className="navv" variant="light">
                <Container>
                    <Nav className="me-auto icn">
                        {/* <NavLink style={isActive => ({color: isActive ? "grey" : "blue" })} exact to='/file' className="pad"><DescriptionIcon />File</NavLink> */}
                        <NavLink style={isActive => ({color: isActive ? "grey" : "blue" })} to='/mytask' className="pad"><TaskIcon />Mytask</NavLink>
                        {/* <NavLink style={isActive => ({color: isActive ? "grey" : "blue" })} to='/team' className="pad"><GroupIcon />Team</NavLink> */}
                    </Nav>
                    <AccountCircleIcon />
                    <span style={{marginLeft : 5}}>Sahil Dixit</span>
                </Container>
            </Navbar>
            <Routes>
                    {/* <Route exact path="/file" element={<Newproj />} /> */}
                    <Route exact path="/mytask" element={<Mytask />} />
                    {/* <Route exact path="/team" element={<Team />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Executive;