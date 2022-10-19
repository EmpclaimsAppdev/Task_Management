import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './executive.css'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Timer from './Timer';

function Mytask() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="account">
                <span>Task Board - Advanced  Md</span>
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

            <Divider />
            <div>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <b> Extraction & Volume tracker updation
                </b>
                {open ?
                    <div class="modal-body row">
                        <Divider horizontal></Divider>
                        <div class="col-md-3">
                            <div className="div-scroll-main">
                                <div className="div-scroll-left">
                                    <span style={{ 'color': 'grey' }}>Start date </span>
                                    <span> 03/05/2022</span>
                                </div>
                                <div className="div-scroll-right" style={{ 'paddingLeft': '30px' }}>
                                    <span style={{ 'color': 'grey' }}>End date </span>
                                    <span> 03/06/2022</span>
                                </div>
                            </div>
                            <div className="div-scroll-bottom">
                                <p style={{ 'color': 'grey' }}> SOP Link:</p>
                                <a href="">
                                    https:www.bing.com/search?q=google+chrome+for+windows+11&cvid=a88026c22d0642a58dd1d4449c19b94a&aqs=edge.0.69i59j69i57j69i59l2j69i60l5.758j0j1&pglt=2083&FORM=ANNTA1&PC=LCTS
                                </a>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <table class="table table-bordered horizontally-scrolled-items"  >
                                <tbody>
                                    <tr>
                                        <td>Monday <br/> 1</td>
                                        <td>Tuesday <br/> 2</td>
                                        <td>Wednesday <br/> 3</td>
                                        <td>Thursday <br/> 4</td>
                                        <td>Friday <br/> 5</td>
                                        <td rowSpan={4} className='arrow-top'>
                                            <div className='arrow'>
                                            <span> <ArrowLeftRoundedIcon sx={{ fontSize: 30 }}/></span> 
                                            <span> <strong>January 2022 </strong></span>
                                            <span><ArrowRightRoundedIcon sx={{ fontSize: 30 }}/></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <Timer/></td>
                                        <td> <Timer/></td>
                                        <td> <Timer/></td>
                                        <td> <Timer/></td>
                                        <td> <Timer/></td>
                                    </tr>
                                    <tr>
                                     
                                        <td> Add Comment <br/> <br/><TextField id="outlined-basic" label="Enter your text" variant="outlined" size="small"/></td>
                                        <td> Add Comment <br/> <br/><TextField id="outlined-basic" label="Enter your text" variant="outlined" size="small"/></td>
                                        <td> Add Comment <br/> <br/><TextField id="outlined-basic" label="Enter your text" variant="outlined" size="small"/></td>
                                        <td> Add Comment <br/> <br/><TextField id="outlined-basic" label="Enter your text" variant="outlined" size="small"/></td>
                                        <td> Add Comment <br/> <br/><TextField id="outlined-basic" label="Enter your text" variant="outlined" size="small"/></td>
                            
                                    </tr>
                                    <tr>
                                        <td> No.of Task Done <br/> <br/><TextField id="outlined-basic" label="00" variant="outlined" size="small" sx={{ width:45}} /></td>
                                        <td> No.of Task Done <br/> <br/><TextField id="outlined-basic" label="00" variant="outlined" size="small" sx={{ width:45}} /></td>
                                        <td> No.of Task Done <br/> <br/><TextField id="outlined-basic" label="00" variant="outlined" size="small" sx={{ width:45}} /></td>
                                        <td> No.of Task Done <br/> <br/><TextField id="outlined-basic" label="00" variant="outlined" size="small" sx={{ width:45}} /></td>
                                        <td> No.of Task Done <br/> <br/><TextField id="outlined-basic" label="00" variant="outlined" size="small" sx={{ width:45}} /></td>
                                    </tr> 
                                       
                                </tbody>
                            </table>
                        </div>

                    </div>
                    : null}


            </div>
            <Divider />
        </div>
    )
}

export default Mytask;