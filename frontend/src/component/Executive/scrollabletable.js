import { Card, Table } from "react-bootstrap";
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import { MDBDataTable } from 'mdbreact';
import { Divider } from "@mui/material";

const ScrollableTable = () => {
  return (

    <div class="modal-body row">
      <Divider></Divider>
      <div class="col-md-4">
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
          <a   href="">
            https:www.bing.com/search?q=google+chrome+for+windows+11&cvid=a88026c22d0642a58dd1d4449c19b94a&aqs=edge.0.69i59j69i57j69i59l2j69i60l5.758j0j1&pglt=2083&FORM=ANNTA1&PC=LCTS
          </a>    
        </div>
      </div>
      <div class="col-md-6">
        <div> Hello world</div>
      <Divider orientation="vertical"></Divider>
        
      </div>
      <div class="col-md-2">
        Your second column here
      </div>
    </div>
    //  <table responsive className="table" >
    //    <thead >
    //      <tr>
    //       <td  rowSpan={4} className="left-scrolltd" style={{'padding-bottom':'100px'}}>
    //        <div className="div-scroll-main">
    //        <div className="div-scroll-left">
    //          <span style={{'color':'grey'}}>Start date </span>
    //          <span> 03/05/2022</span>
    //        </div>
    //        <div className="div-scroll-right" style={{'paddingLeft':'30px'}}>
    //          <span style={{'color':'grey'}}>End date </span>
    //          <span> 03/06/2022</span>
    //        </div>
    //        </div>
    //        <div className="div-scroll-bottom">
    //        <p style={{'color':'grey'}}> SOP Link:</p>
    //        <a href="">
    //         https:www.bing.com/search?q=google+chrome+for+windows+11&cvid=a88026c22d0642a58dd1d4449c19b94a&aqs=edge.0.69i59j69i57j69i59l2j69i60l5.758j0j1&pglt=2083&FORM=ANNTA1&PC=LCTS
    //         </a>
    //        </div>
    //        </td>
    //       <td style={{'padding':'0px','overflowX':'scroll','border': '1px solid slategray','maxWidth':'200px'}}>
    //        {[1,1,1,1,1,11,1,].map((ele)=>(
    //        <td > 
          //  <tr className="scrolltr">Monday<br/> 11</tr>
          //  <tr className="scrolltr">
          //    <PlayCircleFilledRoundedIcon /> 10:00:00 &nbsp;&nbsp;&nbsp; <PauseCircleFilledRoundedIcon/> 10:00:00
          //  </tr>
          //  <tr className="scrolltr">Comment</tr>
          //  <tr className="scrolltr">No task</tr>
    //        </td>
    //     ))} 
    //       </td>

    //        <td style={{'paddingRight':'90px'}}> Month</td>
    //      </tr>
    //    </thead>
    //    <tbody >
    //      <tr>
    //      </tr>
    //      </tbody>

    //  </table>
  );
};

export default ScrollableTable;