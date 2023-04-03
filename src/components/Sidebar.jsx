import React from 'react'
import { SidebarOptions } from './SidebarOptions'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

export const Sidebar = () => {
  const options = ['Dashboard', "Wow Users",'Video Clips','Reported Content','Category','Info Page','FAQ','Push Notification','Internal User','Explicit Content','Feedback Messages','KYC','Coin Withdrwal Request','Coin Purchased','Coin Tansfer History','Coin Earning History','Free Coin Earning','User Deleted']


  return (
    <div className='sidebarMain'>
      <div className='headingMain'>
        <div className='headingLogo'><LocalFireDepartmentOutlinedIcon   style={{fontSize:'2rem'}}/></div>
        <div className='heading1'>WOW </div>
        <div className='heading2'>TALENT</div>
      </div>
      <div>
        {
          options.map((el)=>{
            return <SidebarOptions val={el}/>
          })
        }
      </div>
    </div>
  )
}
