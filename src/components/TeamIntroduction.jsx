import React from 'react'

const TeamIntroduction = () => {
  return (
    <div className='min-h-screen w-full bg-black flex flex-col lg:flex-row items-center lg:justify-around justify-center gap-20 max-lg:text-center p-8'>
      <div className='text-white'>
        <h1 className='text-4xl font-semibold max-w-sm text-shadow-md max-lg:mx-auto'>Meet the team shaping the future</h1>
        <p className='max-w-lg my-4'>Our diverse team of engineers, designers and innovators is dedicated to building AI agents that simplify work and empower businesses worldwide.</p>
        <button className='px-8 py-2 bg-blue-500 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer'>Join our team</button>
      </div>

      <div className='flex gap-4 items-center '>
        <div className='flex flex-col gap-4'>
            <img className='md:w-40 md:h-40 h-20 w-20 rounded-lg object-cover hover:-translate-y-2 transition-all duration-300' src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='md:w-40 md:h-40 h-20 w-20 rounded-lg object-cover hover:-translate-y-2 transition-all duration-300' src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='flex flex-col gap-4'>
            <img className='md:w-40 md:h-40 h-20 w-20 rounded-lg object-cover hover:-translate-y-2 transition-all duration-300' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='md:w-40 md:h-40 h-20 w-20 rounded-lg object-cover hover:-translate-y-2 transition-all duration-300' src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='md:w-40 md:h-40 h-20 w-20 rounded-lg object-cover hover:-translate-y-2 transition-all duration-300' src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='flex flex-col gap-4'>
            <img className='md:w-40 md:h-40 h-20 w-20 rounded-lg object-cover hover:-translate-y-2 transition-all duration-300' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img className='md:w-40 md:h-40 h-20 w-20 rounded-lg object-cover hover:-translate-y-2 transition-all duration-300' src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  )
}

export default TeamIntroduction
