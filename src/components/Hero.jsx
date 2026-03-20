import { ArrowRight, MenuIcon, Sun, X } from 'lucide-react'
import React, { useState } from 'react'

const Hero = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={`bg-linear-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] min-h-screen w-full pt-6 ${openMenu?'overflow-hidden':''}`}>
      <header className='flex justify-between items-center bg-white rounded-full max-w-5xl w-full mx-auto px-6 py-4 shadow-sm '>
        <a href="https://prebuiltui.com">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg" />
        </a>
        <nav className={`max-md:absolute max-md:left-0 max-md:top-0 max-md:overflow-hidden max-md:h-full transition-[width] bg-white/50 backdrop:blur-md z-50 max-md:text-xl max-md:font-medium font-normal flex items-center justify-center flex-col md:flex-row gap-8 ${openMenu?'max-md:w-full':'max-md:w-0'}`}>
          <a className='hover:text-violet-500 transition-all duration-200 text-neutral-800' href="#">Products</a>
          <a className='hover:text-violet-500 transition-all duration-200 text-neutral-800' href="#">Customer Stories</a>
          <a className='hover:text-violet-500 transition-all duration-200 text-neutral-800' href="#">Pricing</a>
          <a className='hover:text-violet-500 transition-all duration-200 text-neutral-800' href="#">Docs</a>
          <button onClick={()=>{setOpenMenu(false)}} className='md:hidden text-neutral-700'><X/></button>
        </nav>
        <div className='flex items-center gap-8'>
          <button className='border rounded-lg p-2 border-gray-300 hover:bg-neutral-100 transition-all duration-200'><Sun className='w-5 h-5 text-neutral-700'/></button>
          <button className='max-md:hidden bg-indigo-600 text-white font-medium text-md px-6 py-2 rounded-full hover:bg-indigo-700 transition-all duration-200 cursor-pointer'>sign up</button>
          <button onClick={()=>{setOpenMenu(true)}} className='md:hidden text-neutral-700'><MenuIcon/></button>
        </div>
      </header>
      <main className='flex flex-col items-center max-w-7xl mx-auto w-full'>
        <button className='mt-12 mb-6 flex gap-2 items-center border border-violet-600 pl-4 pr-1 py-1 rounded-full text-violet-600 text-sm hover:bg-indigo-50 transition'>
          <p>Explore how we help grow brands.</p>
          <div className='rounded-full relative w-6 h-6 text-center bg-indigo-600'><ArrowRight className='w-4 absolute left-1 text-white'/></div>
        </button>

        <h1 className='text-5xl font-semibold text-center max-w-2xl'>Preferred choice of leaders in <span className='text-indigo-600'>every industry</span></h1>

        <h2 className='mt-6 text-lg max-w-lg text-center text-neutral-700 mb-12'>Learn why professionals trust our solution to complete their customer journey.</h2>

        <button className='bg-indigo-600 text-white font-medium text-md px-6 py-2 rounded-full hover:bg-indigo-700 transition-all duration-200 cursor-pointer flex items-center gap-2'>Read Success Stories <ArrowRight className='w-5 '/></button>

        <div className='flex justify-center gap-6 mt-12 max-w-4xl w-full pb-6 max-md:overflow-x-auto'>
          <img className='w-36 h-44 rounded-lg object-cover hover:-translate-y-1 transition duration-200' src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='w-36 h-44 rounded-lg object-cover hover:-translate-y-1 transition duration-200' src="https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='w-36 h-44 rounded-lg object-cover hover:-translate-y-1 transition duration-200' src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='w-36 h-44 rounded-lg object-cover hover:-translate-y-1 transition duration-200' src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='w-36 h-44 rounded-lg object-cover hover:-translate-y-1 transition duration-200' src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </main>
    </div>
  )
}

export default Hero
