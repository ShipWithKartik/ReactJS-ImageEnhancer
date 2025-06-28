import axios from 'axios'; 

const API_KEY = "wxp8bl1tfez6afb14"; 
const  BASE_URL = "https://techhk.aoscdn.com"  

export const enhancedImageAPI = async(file)=>{      
    try{          
        const taskId = await uploadImage(file);         
        const  enhancedImageData = await PollForEnhancedImage(taskId);          
        return enhancedImageData;              
    }     
    catch(error){         
        console.log("Error enhancing Image",error.message);
        throw error; // Re-throw error so calling component can handle it
    } 
}   

const uploadImage = async(file)=>{      
    const formData = new FormData();     
    formData.append('image_file',file);      

    const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`,formData , {
        headers: { 
            'Content-Type':'multipart/form-data',         
            'X-API-KEY': API_KEY      
        }
    });      

    if(!data.data.task_id){         
        throw new Error("Failed to upload image! Task ID not found.");     
    }      

    // POST - /api/tasks/visual/scale  res - task_id     
    return data.data.task_id; 
}  

const fetchEnhancedImage = async(taskId)=>{      
    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: { // Add headers for GET request too
            'X-API-KEY': API_KEY
        }
    });       

    if(!data.data){         
        throw new Error('Failed to fetch');     
    }      

    return data.data;      
    // GET - /api/tasks/visual/scale/{task_id} 
}  

const PollForEnhancedImage = async(taskId,retries = 0) =>{      
    const result = await fetchEnhancedImage(taskId);      

    if(result.state == 4){          
        console.log('Processing...');          

        if(retries >= 10){             
            throw new Error("Max retries reached");         
        }          

        await new Promise((resolve)=>{             
            setTimeout(resolve,2000);         
        });          

        return PollForEnhancedImage(taskId,retries+1);     
    }      

    return result;       
} 

// Polling is a technique where we repeatedly check for updates at regular intervals. We need Polling because server is processing the image and after some time it's going to return the enhanced image , but how do we know when it's done so as to return the result (It happens when server takes a much longer time to process the request)  

/* Typical state codes for async tasks: 
-> 1 = Success/Completed 
-> 2 = Failed/Error 
-> 3 = Cancelled 
-> 4 = Processing / Running  
-> 5 = Queued/Pending  
*/