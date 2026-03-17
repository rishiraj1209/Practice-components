import React, { useState } from 'react'
const faqsData = [
        {
            question: "Lightning-Fast Performance",
            answer: "Built with speed — minimal load times and optimized rendering.",
        },
        {
            question: "Fully Customizable Components",
            answer:
            "Easily adjust styles, structure, and behavior to match your project needs.",
        },
        {
            question: "Responsive by Default",
            answer:
            "Every component is responsive by default — no extra CSS required.",
        },
        {
            question: "Tailwind CSS Powered",
            answer:
            "Built using Tailwind utility classes — no extra CSS or frameworks required.",
        },
        {
            question: "Dark Mode Support",
            answer:
            "All components come ready with light and dark theme support out of the box.",
        },
    ];
const FAQAccordian = () => {
    
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index)=>{
        setOpenIndex(openIndex === index? null : index);
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold tracking-wide mb-4 bg-clip-text text-transparent bg-linear-to-b from-neutral-900 to-neutral-500 text-shadow-md'>Frequently Asked Questions</h1>
      <h2 className='max-w-sm text-center text-slate-600 mb-8 text-shadow-sm'>Proactively answering FAQs boosts user confidence and cuts down on support tickets.</h2>

      <div className='flex flex-col gap-4'>
        {faqsData.map((faq, index)=>(
            <div key={index}>
                <div onClick={()=>handleToggle(index)} className='flex items-center justify-between w-xl border border-slate-200 bg-linear-to-r from-indigo-50 to-white p-4 rounded-md cursor-pointer shadow-sm'>
                    <h2>{faq.question}</h2>
                    <svg
                        className={`transition duration-500 ${
                        openIndex === index ? "rotate-180" : ""
                        }`}
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill='none'
                    >
                        <path
                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                        stroke="#1D293D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div className={`transition-all duration-500 overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100 pt-4':'max-h-0 opacity-0'}`}>
                    <p className='text-slate-500 text-sm font-medium px-4'>{faq.answer}</p>
                </div>
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default FAQAccordian
