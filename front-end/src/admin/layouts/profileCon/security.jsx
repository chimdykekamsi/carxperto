import React from 'react'

const Security = () => {
  return (
    
    <div>
        <div className="flex justify-between mt-5 mb-5">
            <div>
                <h2 className='text-start lg:text-xl text-[10px] font-bold text-primary-normal'>Password Strength</h2>
                <p className='text-start w-[80%] lg:text-[14px] text-[7px] text-slate-500' >Protect your account with a strong password. A strong password includes a mix of uppercase and lowercase letters, numbers, and special characters. Strengthen the security of your account by creating a password that is difficult for others to guess. </p>
            </div>
            <p className='w-[70px] h-[40px] p-2 bg-secondary-light rounded-lg text-secondary-normal text-center'>
                Strong
            </p>
        </div>
       
        
        <div className="flex justify-between mt-5 mb-5">
            <div>
                <h2 className='text-start lg:text-xl text-[10px] font-bold text-primary-normal'>Two-Factor Authentication</h2>
                <p className='text-start w-[80%] lg:text-[14px] text-[7px] text-slate-500' >Enhance the security of your account with two-factor authentication (2FA). With 2FA enabled, you'll need to provide a secondary verification code in addition to your password when logging in. This adds an extra layer of protection against unauthorized access to your account. </p>
            </div>
            <label class="relative mb-5 cursor-pointer">
                <input type="checkbox" value="" class="peer sr-only" />
                <div class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
            </label>
        </div>

        
    </div>
  )
}

export default Security

