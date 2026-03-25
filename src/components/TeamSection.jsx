import React from 'react'
const profiles = [
    {name:"Donald Jackman", role:"Founder & CEO", image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Michael Brown", role:"Head of Engineering", image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"David Thompson", role:"Full Stack Developer", image:"https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Olivia Martinez", role:"Product Designer", image:"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Liam Anderson", role:"Backend Developer", image:"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Jordan Lee", role:"Marketing Lead", image:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

const TeamSection = () => {
  return (
    <div className='max-w-4xl mx-auto py-10 min-h-screen'>
        <div className='flex flex-col items-center'>
            <h1 className='text-center text-4xl font-semibold text-shadow-sm mb-2'>Meet Our team</h1>
            <p className='text-center max-w-2xl text-slate-500'>Our diverse team of engineers, designers and innovators is dedicated to building AI agents that simplify work and empower businesses worldwide.</p>
            <button className='px-8 py-2 bg-neutral-200 border-2 rounded-md mt-4 mb-8 shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] active:shadow-none cursor-pointer transition-shadow duration-200 font-medium'>Join Our team</button>
        </div>
        <div className='grid grid-cols-3 gap-10'>
            {profiles.map((profile,index)=>(
                <ProfileCard key={index} profile={profile}/>
            ))}
        </div>
    </div>
  )
}

const ProfileCard = ({profile})=>{
    return(
        <div className='flex flex-col items-center border p-4 rounded-md shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] transform hover:-translate-y-2 transition-all duration-200 cursor-pointer bg-neutral-100'>
            <img className='w-24 h-24 rounded-full object-cover object-top' src={profile.image} alt="" />
            <h1 className='mt-4 text-2xl text-shadow-sm'>{profile.name}</h1>
            <p className='text-sm text-neutral-700'>{profile.role}</p>
            <div className='flex items-center gap-2 text-slate-500 mt-2'>
                <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.335 3.333s-.584 1.75-1.667 2.834c1.333 8.333-7.833 14.416-15 9.666 1.833.083 3.667-.5 5-1.667-4.167-1.25-6.25-6.166-4.167-10 1.834 2.167 4.667 3.417 7.5 3.334-.75-3.5 3.334-5.5 5.834-3.167.916 0 2.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
                <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.332 6.667a5 5 0 0 1 5 5V17.5h-3.333v-5.834a1.667 1.667 0 0 0-3.334 0V17.5H8.332v-5.834a5 5 0 0 1 5-5M5.001 7.5H1.668v10h3.333zM3.335 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
                <a href="#" className="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.335 5.834-7.493 4.772a1.67 1.67 0 0 1-1.674 0l-7.5-4.772" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.668 3.334H3.335c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.746 1.667-1.667V5c0-.92-.747-1.666-1.667-1.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default TeamSection
