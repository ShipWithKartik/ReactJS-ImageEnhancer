import React from 'react'

const ImagePreview = (props) => {

  return (

    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>

       

        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>

            <h2 
            className='text-xl font-semibold bg-gray-800 text-white'>
                Original Image
            </h2>

            <img src={props.uploaded} alt="Image"/>

            <div>No Image Selected</div>

        </div>


        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>

            <h2 
            className='text-xl font-semibold bg-blue-800 text-white'>
                Enhanced Image
            </h2>

            <img src="" alt="Image"/>

            <div>No Enhanced Image</div>

        </div>
        
    </div>

  )

}

export default ImagePreview