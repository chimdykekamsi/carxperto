import React, { useState } from 'react'
import style from './subscriptionbody.module.css'
import SubscriptionList from './subscriptionList';
import Subscriptionprofile from './subscriptionprofile';


const Subscriptionbody = () => {
    const [activeTab, setActiveTab] = useState('Subscription-list');
  return (
    <div className={style.container}>
        <div className={style.header}>
                <div
                className={activeTab === 'Subscription-list' ? `${style.tab} ${style.active}` : style.tab}
                onClick={() => setActiveTab('Subscription-list')}
                >
                Subscription List
                {activeTab === 'Subscription-list' && <div className={style.stickDash}>

                  </div>}
                </div>
                <div
                className={activeTab === 'Subscription-profile' ? `${style.tab} ${style.active}` : style.tab}
                onClick={() => setActiveTab('Subscription-profile')}
                >
                Subscription Plan
                {activeTab === 'Subscription-profile' && <div className={style.stickDash}>
                  
                  </div>}
                </div>
              </div>
                  {activeTab === 'Subscription-list' && <div >
                  <SubscriptionList />
                  </div>}
                  {activeTab === 'Subscription-profile' && <div >
                  <Subscriptionprofile/>
                  </div>}
                  
    </div>
  )
}

export default Subscriptionbody