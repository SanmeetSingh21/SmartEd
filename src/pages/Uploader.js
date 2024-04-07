import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';

const CoursesPage = () => {
  const [videoFile, setVideoFile] = useState(null);

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle video upload logic here (e.g., send videoFile to server)
    console.log('Video file:', videoFile);
  };

  return (
    <div>
    
      <h2>Courses Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="videoUpload">Upload Video:</label>
          <input
            type="file"
            id="videoUpload"
            accept="video/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {/* Display uploaded video if available */}
      {videoFile && (
        <div>
          <h3>Uploaded Video:</h3>
          <video width="320" height="240" controls>
            <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
