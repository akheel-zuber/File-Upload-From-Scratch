import { useRef, useState } from "react";
import "./App.css";
import { HardDriveUpload, Trash } from "lucide-react";

function App() {
  const fileInputRef = useRef(null);
  const fileRef = useRef(null);
  const [Files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const viewClickedFile = (name) => {
    const file = Files.find((file) => file.name === name);
    if (file) {
      if (selectedFile.length > 0) {
        URL.revokeObjectURL(selectedFile[0]);
      }
      setSelectedFile([file]);
    }
  };
  

  const closePreview = (name) => {
    if (selectedFile.length>0 && selectedFile[0].name === name){
      setSelectedFile([]);
    }
  };

  function handleChange(e) {
    setFiles((prev) => [...prev, ...Array.from(e.target.files)]);
  }

  function handleDeleteFiles(name) {
    const updatedFiles = Files.filter((file) => {
      return file.name != name;
    });
    setFiles(updatedFiles);
    if (selectedFile.length > 0 && name === selectedFile[0].name) {
      setSelectedFile([]);
    }
  }

  return (
    <div className="flex flex-col">
      <div
        className="w-100 flex mx-auto border-2 border-dotted border-gray-500 rounded-xl h-30 relative"
        onClick={handleBoxClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleChange}
          multiple
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <HardDriveUpload />
          <div>click here to upload your files</div>
        </div>
      </div>
      {Files.length ? (
        <div className="mt-2 w-100 mx-auto border-1 rounded-lg border-gray-700 flex flex-col overflow-hidden">
          {Files.map((file, index) => {
            return (
              <div
                key={index}
                className="flex flex-row  justify-between items-center rounded-lg p-3 m-2 border-1 border-gray-200"
              >
                <div className="cursor-pointer">
                  {file.type.startsWith("image/") && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="w-12 h-12 rounded-md object-cover mr-3 inline"
                    />
                  )}
                  {file.name.split(".")[0].slice(0,15)}{" "}
                </div>
                <button
                  onClick={() => viewClickedFile(file.name)}
                  className="cursor-pointer bg-black text-white rounded-lg w-20 items-center h-8"
                >
                  view
                </button>
                <button
                  onClick={()=>closePreview(file.name)}
                  className="cursor-pointer bg-red-500 text-white rounded-lg w-20 items-center h-8"
                >
                  Close
                </button>
                <span
                  className="inline"
                  onClick={() => handleDeleteFiles(file.name)}
                  style={{ cursor: "pointer" }}
                >
                  <Trash />
                </span>
              </div>
            );
          })}
        </div>
      ) : null}

      <section className="mt-3 p-2 mx-auto">
        {selectedFile.length > 0 &&
          selectedFile[0].type == "application/pdf" && (
            <iframe
              src={URL.createObjectURL(selectedFile[0])}
              className="h-150 w-150 border-0"
            ></iframe>
          )}
        {selectedFile.length > 0 && selectedFile[0].type.startsWith("image/")  && (
          <img
            src={URL.createObjectURL(selectedFile[0])}
            className="h-150 w-150 border-0"
          ></img>
        )}
        {selectedFile.length > 0 && selectedFile[0].type == "video/mp4" && (
          <video controls>
            <source
              src={URL.createObjectURL(selectedFile[0])}
              type={selectedFile[0].type}
            />
          </video>
        )}
      </section>
    </div>
  );
}

export default App;
