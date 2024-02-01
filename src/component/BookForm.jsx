import React, { useEffect, useState } from 'react'

const BookForm = () => {
    const [formData  , setFormData] = useState({
        name : '',
        email : '',
    })

    const [show ,setShow] = useState("");

    useEffect(() => {
        const storedShow = localStorage.getItem('movie');
        if (storedShow) {
          setShow(JSON.parse(storedShow));
        }
    }, [])

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        if(!formData.name  || !formData.email)
        return;

        console.log("Form Submitted");
    };
    
  return (
    <div className='bg-[#424854] min-h-screen py-10'>
        <div className='w-11/12 max-w-[1200px] mx-auto bg-[#585D69] p-6 rounded-md text-white'>
            <h2 className='text-4xl font-bold text-center mb-10'>Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <p className='textt-lg font-medium mb-5'>Show name : <span className='opacity-80'>{show.name}</span></p>

                <div className='flex flex-col gap-1 w-[50%]'>
                    <label htmlFor="name" className='text-[14px]'>Name:</label>
                    <input
                    type='text'
                    name='name'
                    id='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Enter your name'
                    className='rounded-lg bg-[#424854] p-3 text-[16px] leading-[24px] shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none'
                   />
                </div>

                <div className='flex flex-col gap-1 w-[50%] mt-2'>
                    <label htmlFor="email" className='text-[14px]'>Email:</label>
                    <input
                    type='email'
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Enter your Email'
                    className='rounded-lg bg-[#424854] p-3 text-[16px] leading-[24px] shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none'
                   />
                </div>

                <button type='submit' className='mt-10 text-center bg-[#4cdaec] py-2 px-3 rounded-md'>
                    Book Now
                </button>
            </form>
        </div>
    </div>
   
  )
}

export default BookForm