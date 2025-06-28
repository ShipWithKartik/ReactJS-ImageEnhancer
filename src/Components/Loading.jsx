import React from 'react'  

const Loading = () => {    
    return (      
        <div className='flex flex-col justify-center items-center h-full py-8'> 
            <div className='animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent'> 
            </div>
            <p className='mt-4 text-gray-600'>Processing your image...</p> 
        </div>      
    ) 
}  

export default Loading;