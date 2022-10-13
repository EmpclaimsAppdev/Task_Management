import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from "@mui/material/TextField";

import { Form, FormSelect } from 'react-bootstrap';


function Newproj(props) {
    const [show, setShow] = useState(false);
    const [AccountName, setAccountName] = useState('');
    const [SelectSoftware, setSelectSoftware] = useState('');
    const [SelectTeam, setSelectTeam] = useState('');

    useEffect(() => {
        console.log(SelectSoftware)
    }, [SelectSoftware])

    
    useEffect(() => {
        console.log(SelectTeam)
    }, [SelectTeam])

    
    useEffect(() => {
        console.log(AccountName)
    }, [AccountName])

    const data = {
        "AccountName": AccountName,
        "SelectSoftware": SelectSoftware,
        "Team": SelectTeam
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addproject = (e) => {
        console.log(SelectSoftware)
        console.log(SelectTeam)

        fetch('http://localhost:8081/create_project', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((data) => { console.log(data) })//settask([...data]) })
        // handleClose()
    }

    // const onChangeColor = (e) =>{
        
    //   }



    return (
        <>
            <div className="account">
                <span>All Account</span>
                <Button variant="primary" onClick={handleShow}> Create Project </Button>
                <div className="search">
                    <TextField
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Account Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Account Name"
                                autoFocus
                                required
                                value={AccountName}
                                onChange={(e) => setAccountName(e.target.value)}
                            />
                        </Form.Group>
                        {/* 
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Software</Form.Label>
                            <FormSelect placeholder='Select Software' 
                                value={SelectSoftware}>
                                <option>Advance MD</option>
                                <option>EPIC</option>
                            </FormSelect>
                        </Form.Group> */}


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Software</Form.Label>
                            <Form.Control as="select" custom onChange={(e)=>setSelectSoftware(e.target.value)}>
                                <option value="Advance MD">Advance MD</option>
                                <option value="Aprima">Aprima</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Software</Form.Label>
                            <Form.Control as="select" custom onChange={(e)=>setSelectTeam(e.target.value)}>
                            <option value="Billing">Billing</option>
                            <option value="AR">AR</option>
                            <option value="Posting">Posting</option>
                            <option value="Coding">Coding</option>
                            </Form.Control>
                        </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={addproject}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Newproj;