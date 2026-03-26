import React from 'react'

const ImageGallery = () => {
  return (
    <div className='min-h-screen py-10'>
      <h1 className='font-semibold text-4xl text-shadow-md text-center'>Our Latest Creations</h1>
      <p className='text-center max-w-lg mx-auto mt-4 text-slate-500'>A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
      <div className='flex gap-2 mt-10 max-w-4xl mx-auto h-100'>

        <div className='relative  w-56 grow rounded-xl overflow-hidden hover:w-full transition-all duration-500'>
            <img 
            src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop"
            alt="image"
            className='h-full w-full object-cover object-center' 
            />
        </div>

        <div className='relative w-56 grow rounded-xl overflow-hidden hover:w-full transition-all duration-500'>
            <img 
            src="https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=800&w=800&auto=format&fit=crop"
            alt="image" 
            className='h-full w-full object-cover object-center' 
            />
        </div>

        <div className='relative w-56 grow rounded-xl overflow-hidden hover:w-full transition-all duration-500'>
            <img 
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&h=800&w=800&auto=format&fit=crop"
            alt="image" 
            className='h-full w-full object-cover object-center' 
            />
        </div>

        <div className='relative w-56 grow rounded-xl overflow-hidden hover:w-full transition-all duration-500'>
            <img 
            src="https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=800&w=800&auto=format&fit=crop"
            alt="image" 
            className='h-full w-full object-cover object-center' 
            />
        </div>

        <div className='relative w-56 grow rounded-xl overflow-hidden hover:w-full transition-all duration-500'>
            <img 
            src="https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop"
            alt="image" 
            className='h-full w-full object-cover object-center' 
            />
        </div>

        <div className='relative w-56 grow rounded-xl overflow-hidden hover:w-full transition-all duration-500'>
            <img 
            src="https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop"
            alt="image" 
            className='h-full w-full object-cover object-center' 
            />
        </div>

      </div>
    </div>
  )
}

export default ImageGallery;
