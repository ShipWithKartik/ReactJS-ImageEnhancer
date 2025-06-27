import React from 'react'

const Upload = (props) => {

    const showImageHandler = (event)=>{

        const file = event.target.files[0]
        // FileList array (target.files)

        if(file){
            props.uploadImageHandler(file);
        }
    }

  return (

    <div>
        <label 
        htmlFor='fileInput' 
        className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-blue-500 transition-all'>
        
        <input 
        type='file'
        id='fileInput'
        className='hidden'
        onChange={showImageHandler}
        />

        <span>
            Click and drag to upload your image
        </span>

        </label>
    </div>

  )
}

export default Upload