import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from "@mui/material/TextField";
import Select from 'react-select';
import { Form, FormSelect } from 'react-bootstrap';
import Cards from './cards';


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

    const [AccountName, setAccountName] = useState('')
    const [Software, setSoftware] = useState('')
    const [TeamInvolved, setTeamInvolved] = useState([])

    const [list, setlist] = useState([])


    const data = {
        "AccountName": AccountName,
        "Software": Software,
    }

    const handleteam = (e) => {
        let cde = [...TeamInvolved]
        cde.push({ "label": e[0].value })
        console.log(cde)
        setTeamInvolved(cde)
    }

    const handleSubmit = () => {
        let abc = [...list]
        abc.push(data)
        console.log(abc)
        setlist(abc)
        handleClose(true)
    }


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
            <div className="flexcard">
                        {list.length > 0 ? list.map((ele, index) => {
                            return (<Cards {...ele} />)
                        }) : ""}
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
                                onChange={(e) => { setAccountName(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Software</Form.Label>
                            <FormSelect placeholder='Select Software' onChange={(e) => { setSoftware(e.target.value) }} >
                                <option>Select Software</option>
                                <option value={'Advanced MD'}>Advanced Md</option>
                            </FormSelect>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Team Involved</Form.Label>
                            <Select
                                isMulti={true}
                                options={options}
                                onChange={(e) => { handleteam(e) }}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Newproj;