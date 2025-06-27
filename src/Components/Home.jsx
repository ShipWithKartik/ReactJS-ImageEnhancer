import React, { useState } from 'react'
import Upload from './Components/Upload'
import ImagePreview from './Components/ImagePreview'

const Home = () => {

    const [uploadedImage, setUploadedImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const uploadImageHanlder = (file)=>{

        setUploadedImage(URL.createObjectURL(file));
        setLoading(true);

        // Calling the API to enhance the image
        
    }
    
  return (

    <div>

        <Upload 
        uploadImageHanlder={uploadImageHanlder}/>

        <ImagePreview 
        loading={loading} 
        uploaded={uploadedImage} 
        enhanced={enhancedImage}/>

    </div>

  )
}

export default Home