import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from "@mui/material/TextField";
// import ReactDatePicker from 'react-datepicker';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import './App.css';

import { Form, FormSelect } from 'react-bootstrap';




function Mytask() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <div className="account">
                <span>Advanced Md</span>
                <Button variant="primary" onClick={handleShow}>
                    Create Task
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
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Department</Form.Label>
                            <FormSelect placeholder='Select Software'>
                                <option disabled default>Select Department</option>
                                <option>Billing</option>
                                <option>AR</option>
                                <option>Posting</option>
                            </FormSelect>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task To Be Done</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Task Name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Assignee</Form.Label>
                            <FormSelect placeholder='Select Software'>
                                <option >Unknown</option>
                                <option>Billing</option>
                                <option>AR</option>
                                <option>Posting</option>
                            </FormSelect>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Second Assignee</Form.Label>
                            <FormSelect placeholder='Select Software'>
                                <option >Unknown</option>
                                <option>Billing</option>
                                <option>AR</option>
                                <option>Posting</option>
                            </FormSelect>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>SOP (is SOP created)</Form.Label>
                            <FormSelect placeholder='Team Involved'>
                                <option>Click here to select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </FormSelect>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Time Line</Form.Label>
                            <FormSelect placeholder='Team Involved'>
                                <option>Click here to select</option>
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Custom  </option>
                            </FormSelect>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Next
                    </Button>

                </Modal.Footer>
            </Modal>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td width='60%'>Task</td>
                            <td>Assign Date</td>
                            <td>Time Taken</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Mytask;