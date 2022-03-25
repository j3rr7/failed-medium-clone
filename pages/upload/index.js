import React,{useState} from 'react'
import axios from 'axios'

export default function index() {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (e)=>{
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  }

  const uploadToServer = async (e) => {
    const body = new FormData();
    body.append("file", image);
    await axios.post("/api/test-upload", body);
  }

  return (
    <div className="container">
      <div className="mt-56">
        <img src={createObjectURL}/>
        <h4>Select Image</h4>
        <input 
          type="file" 
          name="file" 
          id="file" 
          onChange={uploadToClient}
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-none border-2 border-color-primary text-custom font-medium rounded-full hover:bg-primary hover:text-white" 
          onClick={uploadToServer}
        >
          Upload
        </button>
      </div>
    </div>
  )
}
