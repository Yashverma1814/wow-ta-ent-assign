import React from 'react'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import RefreshIcon from '@mui/icons-material/Refresh';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BlockIcon from '@mui/icons-material/Block';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CachedIcon from '@mui/icons-material/Cached';

export const InfoPart = (props) => {
  console.log(props);
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
        <div className="navInfoPartLogo">
        {props.val==='App Installed'?<DownloadForOfflineIcon/>:
          props.val==='Active Installs'?<RefreshIcon />:
          props.val==='Churn Rate'?<CompareArrowsIcon />:
          props.val==='App Un-Installed'?<BlockIcon />:
          props.val==='Alive App users'?<CheckBoxIcon />:
          props.val==='Alive Churn Rate'?<CachedIcon />:''}
        </div>
        <div className='infoPartAbout'>
            <div className="count">100</div>
            <div className="nameOfCount">{props.val}</div>
        </div>
    </div>
  )
}
