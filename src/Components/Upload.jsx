import React from 'react'

const Upload = (props) => {

    const showImageHandler = (event)=>{

        const file = event.target.files[0]
        // FileList array (target.files)

        if(file){
            // Check if file is an image
            if (!file.type.startsWith('image/')) {
                alert('Please select an image file');
                return;
            }
            props.uploadImageHandler(file);
        }
    }

  return (

    <div className='mb-6'> 
        <label 
        htmlFor='fileInput' 
        className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-blue-50 hover:border-blue-400 transition-all'> 
        
        <input 
        type='file'
        id='fileInput'
        className='hidden'
        accept='image/*' // Add accept attribute to only allow images
        onChange={showImageHandler}
        />

        <span className='text-gray-600 text-lg'> {/* FIXED: Added styling */}
            Click and drag to upload your image
        </span>

        </label>
    </div>

  )
}

export default Upload