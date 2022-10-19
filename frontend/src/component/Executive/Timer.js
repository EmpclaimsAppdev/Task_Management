import React, { useState } from 'react';
import BtnComponent from './BtnComponent'
import DisplayComponent from './DisplayComponent'
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Timer() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const [open, setOpen] = useState(false);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };
    const pause = () => {
        clearInterval(interv);
        setStatus(0);
    };

    const stop = () => {
        setStatus(2);
        clearInterval(interv);
        // setTime({ ms: time.ms, s: time.s, m: time.m, h: time.h })
        console.log("Final Time", time.s)
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
    };

    return (
        <div className='play-pause'>
            <span style={{ 'color': 'gray' }}> Start Time <br /><BtnComponent status={status} pause={pause} stop={stop} start={start} /> <DisplayComponent time={time} /> </span> &nbsp; &nbsp; &nbsp; &nbsp;
            <span style={{ 'color': 'gray' }}> End Time <br />
                <StopCircleRoundedIcon color="success" sx={{ fontSize: 30, color: red[500] }} onClick={()=>setOpen(true)} />
                    <Dialog
                        open={open}
                    >
                         <DialogTitle id="responsive-dialog-title">
                            {"Do you want to stop timer?"}
                        </DialogTitle>
                        <DialogActions>
                            <Button autoFocus onClick={() => setOpen(false)}>
                                close
                            </Button>
                            <Button onClick={()=>{setOpen(false);stop()}}autoFocus>
                                yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                <br />
                {status === 2 ? <DisplayComponent time={time} /> : <div>00 : 00 : 00</div>}
            </span >
        </div >
    );
}
export default Timer;
