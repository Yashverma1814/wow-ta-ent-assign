import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { InfoPanel } from '../components/InfoPanel'

export const HomePage = () => {


  return (
    <div className='homePageMain'>
        <Sidebar />
        <div>
          <div>
            <InfoPanel />
          </div>
        </div>
    </div>
  )
}
