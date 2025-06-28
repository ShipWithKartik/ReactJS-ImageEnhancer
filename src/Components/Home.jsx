import React, { useState } from 'react'
import Upload from './Upload' 
import ImagePreview from './ImagePreview' 
import { enhancedImageAPI } from '../utils/enhanceImageApi' 

const Home = () => {

    const [uploadedImage, setUploadedImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const uploadImageHanlder = async (file)=>{

        setUploadedImage(URL.createObjectURL(file));
        // It is a method in JS that creates a temporary local URL for a file object , such as an image video. When a user selects an image , we get an File Object , we can't directly display that file in an <img> tag without converting it into a form that browser can understand.

        // The browser stores this file temporarily in the RAM the url generated lets the browser access that in-memory file 
        setLoading(true);
        setEnhancedImage(null); // Reset enhanced image when uploading new image

        try{

          const enhancedURL = await enhancedImageAPI(file);
          setEnhancedImage(enhancedURL);
          setLoading(false);

        }catch(error){
          console.log(error);
          setLoading(false); // Set loading to false even if error occurs
          alert("There was some Error.Please try again Later")
        }
    }
    
  return (

    <div className='w-full max-w-4xl'> 

        <Upload 
        uploadImageHandler={uploadImageHanlder}/>

        <ImagePreview 
        loading={loading} 
        uploaded={uploadedImage} 
        enhanced={enhancedImage?.image}/>

    </div>

  )
}

export default Home