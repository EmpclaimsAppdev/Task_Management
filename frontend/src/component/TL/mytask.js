import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from "@mui/material/TextField";
import { Form, FormSelect } from 'react-bootstrap';
import CalendarComp from './calenderComp';
// import { Dialog } from '@reach/dialog';
// import '@reach/dialog/styles.css';
// import '@reach/tabs/styles.css';
// import img1 from '../assets/advancemd.webp';
// import { Tabs , Tab , TabList , TabPanels , TabPanel} from'@reach/tabs';
// import { VisuallyHidden } from '@reach/visually-hidden';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './mytask.css';
import Executive from './logout';



function Mytask() {
    const [show, setShow] = React.useState(false);
    const [SOPShow, setSOPShow] = React.useState("none");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   


    return (
        <div>
            <div className="d-flex w-100">
                <div className='mr-auto p-2'><strong>Advanced Md</strong></div>
                <div className='p-2 mr-5'>
                    <Button ariant="primary" onClick={handleShow}>
                        Create Task
                    </Button>
                </div>
                <div className="p-2 ">
                    <TextField className='search'
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="taskAllocation"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="taskAllocation" title="Task Allocation">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Department</Form.Label>
                                    <FormSelect placeholder='Select Software'>
                                        <option disabled default>Select Department</option>
                                        <option>Billing</option>
                                        <option>AR</option>
                                        <option>Posting</option>
                                        <option>Coding</option>
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
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                    <Form.Label>SOP (is SOP created)</Form.Label>
                                    <FormSelect placeholder='Team Involved'  onChange={(e)=>{return(e.target.value==='Yes'?setSOPShow("block"):setSOPShow("none"))}}>
                                        <option>Click here to select</option>
                                        <option value={"Yes"}>Yes</option>
                                        <option>No</option>
                                    </FormSelect>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{"display":SOPShow}}>
                                    <Form.Label>SOP Link</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter SOP Link"
                                        required
                                    />                                   
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Time Line</Form.Label>
                                    <FormSelect placeholder='Team Involved'>
                                        <option>Click here to select</option>
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                        <option>Custom</option>
                                    </FormSelect>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Select Date</Form.Label>
                                    <CalendarComp />
                                </Form.Group>
                            </Form>
                        </Tab>
                        <Tab eventKey="audit" title="Audit">

                        </Tab>
                    </Tabs>
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
            <div>
               
            </div>
        </div>
    )
}

export default Mytask;