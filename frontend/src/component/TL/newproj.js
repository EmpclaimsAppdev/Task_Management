import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from "@mui/material/TextField";
import Select from 'react-select';
import { Form, FormSelect } from 'react-bootstrap';
import '../App.css';



function Newproj(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const options = [
        { value: 'Billing', label: 'Billing' },
        { value: 'AR', label: 'AR' },
        { value: 'Posting', label: 'Posting' },
        { value: 'Coding', label: 'Coding' },
    ];


    return (
        <>
            <div className="account">
                <span>All Account</span>
                    <Button className='btn' variant="primary" onClick={handleShow}>
                        Create Project
                    </Button>
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
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Software</Form.Label>
                            <FormSelect placeholder='Select Software'>
                                <option>Select Software</option>
                                <option>Advanced Md</option>
                            </FormSelect>
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Team Involved</Form.Label>
                            <FormSelect isMulti={true} placeholder='Team Involved'>
                            <option disabled>Team Involved</option>
                            <option>Billing</option>
                            <option>AR</option>
                            <option>Posting</option>
                            <option>Coding</option>
                            </FormSelect>
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Team Involved</Form.Label>
                            <Select
                                isMulti={true}
                                options={options}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Newproj;