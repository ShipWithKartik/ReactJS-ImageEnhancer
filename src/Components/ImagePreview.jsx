import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {

  return (

    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>

        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>

            <h2 
            className='text-xl font-semibold bg-gray-800 text-white p-4 text-center'>
                Original Image
            </h2>

            <div className='p-4 min-h-[300px] flex items-center justify-center'>
                {props.uploaded ? (
                    <img 
                    src={props.uploaded} 
                    alt="Original Image" 
                    className='max-w-full max-h-[400px] object-contain rounded'/> 
                ):(
                    <div className='text-gray-500 text-center'>No Image Selected</div> 
                )}
            </div>

        </div>

        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>

            <h2 
            className='text-xl font-semibold bg-blue-800 text-white p-4 text-center'>
                Enhanced Image
            </h2>

            <div className='p-4 min-h-[300px] flex items-center justify-center'> 
                {props.loading ? (
                    <Loading />
                ) : props.enhanced ? (
                    <img 
                    src={props.enhanced} 
                    alt="Enhanced Image" 
                    className='max-w-full max-h-[400px] object-contain rounded'/> 
                ) : (
                    <div className='text-gray-500 text-center'>No Enhanced Image Available</div>
                )}
            </div>

        </div>
        
    </div>

  )

}

export default ImagePreview