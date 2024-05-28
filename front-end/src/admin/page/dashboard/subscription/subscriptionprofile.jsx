import React from 'react'
import SubscriptCard from './subscriptCard'

import { SubAddNew } from './subaddnew'

const Subscriptionprofile = () => {
  return (
    <div className='flex flex-col'>
        
        <div className='flex gap-4 lg:flex-row flex-col'>
        <SubscriptCard />
        <SubscriptCard />
        </div>
        

        <div className='flex justify-start my-5'>
          <SubAddNew/>  
        </div>
    </div>
  )
}

export default Subscriptionprofile