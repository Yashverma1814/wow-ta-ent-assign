import React from 'react'
import { InfoPart } from './InfoPart'

export const InfoPanel = () => {
    const arrofSection = ['App Installed','Active Installs','Churn Rate','App Un-Installed','Alive App users','Alive Churn Rate']




  return (
    <div className='infoPanelMain'>
        {
            arrofSection.map((el)=>{
                return <div>
                    <InfoPart val={el}/>
                </div>
            })
        }
    </div>
  )
}
