import React, { useState } from 'react'
import style from './profilebody.module.css'
import Preference from './preference';
import Security from './security';

const Profilebody = () => {
    const [activeTab, setActiveTab] = useState('Preferences');
  return (
    <div className={style.container}>
        <div className={style.header}>
               
                <div
                className={activeTab === 'Preferences' ? `${style.tab} ${style.active}` : style.tab}
                onClick={() => setActiveTab('Preferences')}
                >
                Preferences
                {activeTab === 'Preferences' && <div className={style.stickDash}>
                  
                  </div>}
                </div>
                <div
                className={activeTab === 'Security' ? `${style.tab} ${style.active}` : style.tab}
                onClick={() => setActiveTab('Security')}
                >
                Security
                {activeTab === 'Security' && <div className={style.stickDash}></div>}
                </div>
              </div>
                  {activeTab === 'Preferences' && <div >
                  <Preference/>
                  </div>}
                  {activeTab === 'Security' && <div >
                  <Security/>
                  </div>}
    </div>
  )
}

export default Profilebody