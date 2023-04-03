import React from 'react'
import { SidebarOptions } from './SidebarOptions'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

export const Sidebar = () => {
  const options = ['Dashboard', "Wow Users",'Video Clips','Reported Content','Category','Info Page','FAQ','Push Notification','Internal User','Explicit Content','Feedback Messages','KYC','Coin Withdrwal Request','Coin Purchased','Coin Tansfer History','Coin Earning History','Free Coin Earning','User Deleted']


  return (
    <div>
      <div className='headingMain'>
        <span className='headingLogo'><LocalFireDepartmentOutlinedIcon /></span>
        <span className='heading1'>WOW</span>
        <span className='heading2'>TALENT</span>
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
