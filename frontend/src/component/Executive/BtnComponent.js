import React from 'react';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import { red } from '@mui/material/colors';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
      <PlayCircleFilledRoundedIcon color="success" sx={{ fontSize: 30 }} onClick={props.start}/>:""
      }
      {(props.status === 1)? 
          <PauseCircleFilledRoundedIcon sx={{ color: red[500],fontSize: 30 }} onClick={props.pause}/>
       : ""
      }
      {(props.status === 2)? 
        <PlayCircleFilledRoundedIcon color="success" sx={{ fontSize: 30 }}/>:""
      } 
    </div>
  );
}

export default BtnComponent;
