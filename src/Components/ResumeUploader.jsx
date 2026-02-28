import { useState } from 'react';

export const ResumeUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      
      alert(`file "${file.name}" Uploaded Successfully!`);
    } else {
      alert("Please choose any (PDF/Word) file to upload.");
    }
  };

  return (
    <section id="resume-uploader" className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Upload Your Resume</h2>
        
        <div className="border-2 border-dashed border-gray-600 rounded-xl p-10 bg-gray-900/50 hover:border-blue-500 transition-colors duration-300">
          
          <input 
            type="file" 
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-400 
                       file:mr-4 file:py-2.5 file:px-6 
                       file:rounded-full file:border-0 
                       file:text-sm file:font-semibold 
                       file:bg-blue-600 file:text-white 
                       hover:file:bg-blue-700 file:cursor-pointer mb-6"
          />
          
          {file && (
            <p className="text-green-400 mb-6 font-medium">
              file choosen: {file.name}
            </p>
          )}

          <button 
            onClick={handleUpload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            Upload Resume
          </button>
          
        </div>
      </div>
    </section>
  );
};