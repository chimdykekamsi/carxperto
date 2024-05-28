import BackgroundImage from '../../assets/image/backgroundimage.webp';

function Forget() {
  return (
    <div className=' relative'style={{
      backgroundImage: `url(${BackgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='flex flex-col items-center justify-center relative'>
        <img
          src={BackgroundImage}
          alt='background'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-blue-900 opacity-75' />
        <h1
          className='absolute left-4 top-4 object-contain font-bold text-2xl text-accent-white mx-16
          '
        >
          Auto Buy
        </h1>
        <div className='flex justify-center items-center h-screen'>
          <div className='-mt-20 w-96 h-[300px] z-10 bg-accent-white rounded-md'>
            <h2 className='mb-4 text-primary-normal text-lg font-semibold mt-5'>
              Forgot Password?
            </h2>
            <form className='relative'>
              <div className='mx-10 flex items-center mb-2 relative'>
                <label
                  htmlFor='email'
                  className='absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  placeholder='example@gmail.com'
                  className='border border-gray-400 text-xs px-3 py-3 rounded w-80'
                />
              </div>
              <label class='flex items-center mx-10 mb-8'>
                <input
                  type='checkbox'
                  className='form-checkbox bg-transparent text-gray-900 mr-2'
                  name='agree'
                />
                <span className='text-sm text-gray-900 font-extralight'>Remind me always</span>
              </label>
              <button
                type='submit'
                className='w-80 bg-primary-normal text-white py-3 rounded hover:bg-primary-normalhover transition duration-300'
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forget;
