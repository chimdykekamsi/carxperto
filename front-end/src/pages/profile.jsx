import React from 'react'
import Profilebody from '../components/profileCon/Profilebody'
import Footer from '../components/Footer/Footer'

const Profile = () => {
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden ">
        <section className="relative mt-20 mb-20" >
        <Profilebody />
        </section>
        <Footer />
      </section>
    </div>
  )
}

export default Profile
