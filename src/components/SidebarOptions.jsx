import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';



export const SidebarOptions = (props) => {
  console.log(props);
  return (
    <div className='sidebarSub'>
        <div className='logo'>
          {props.val==='Dashboard'?<GridViewIcon />:
          props.val==='Wow Users'?<PersonOutlineOutlinedIcon />:
          props.val==='Video Clips'?<VideocamOutlinedIcon />:
          props.val==='Reported Content'?<ReportProblemOutlinedIcon />:
          props.val==='Category'?<InsertChartOutlinedIcon />:
          props.val==='Info Page'?<ReportGmailerrorredOutlinedIcon />:
          props.val==='FAQ'?<DescriptionOutlinedIcon />:
          props.val==='Push Notification'?<NotificationsNoneOutlinedIcon />:
          <PersonAddAltOutlinedIcon />}
        </div>
        <div className='optionName'>{props.val}</div>
    </div>
  )
}
