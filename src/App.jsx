import React from 'react'
import Home from './Components/Home'
import Upload from './Components/Upload'
import ImagePreview from './Components/ImagePreview'

const App = () => {

  return (

    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4' >

        <div className='text-center mb-8'>

            <h1>
                AI Image Enhancer
            </h1>
            <p>
                Upload Your Image and let us enhance it in Seconds 
            </p>

        </div>

        <div 
        className='text-lg text-gray-500'>
            <p>Powered by AI</p>
        </div>


        <Home />
        <Upload />
        <ImagePreview />


    </div>

  )

}

export default App