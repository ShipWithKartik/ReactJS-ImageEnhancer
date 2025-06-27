const API_KEY = "wxp8bl1tfez6afb14";

export const enhancedImageAPI = async(file)=>{

    try{

        const taskId = await uploadImage(file);
        const enhancedImageData = await fetchEnhancedImage(taskId);
        
    }catch(error){
        console.log("Error enhancing Image",error.message);
    }
}


const uploadImage = async(file)=>{

    // POST - /api/tasks/visual/scale  res - task_id
    return taskId;
}

const fetchEnhancedImage = async(taskId)=>{

    // GET - /api/tasks/visual/scale/{task_id}
}