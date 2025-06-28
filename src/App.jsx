import React from 'react'
import Home from './Components/Home'

const App = () => {

  return (

    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4' >

        <div className='text-center mb-8'>

            <h1 className='text-3xl font-bold text-gray-800 mb-2'> 
                AI Image Enhancer
            </h1>
            <p className='text-gray-600'> 
                Upload Your Image and let us enhance it in Seconds 
            </p>

        </div>

        <div 
        className='text-lg text-gray-500 mb-6'> 
            <p>Powered by AI</p>
        </div>

        
        <Home />

    </div>
  )
}

export default App;
