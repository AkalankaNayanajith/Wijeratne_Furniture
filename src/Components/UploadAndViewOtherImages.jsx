import { useState } from "react";

const UploadAndViewOtherImages = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Select Images:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          multiple
          accept="image/*"
          onChange={(event) => setSelectedImages(event.target.files)}
          className="p-2 border border-gray-400 rounded w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Array.from(selectedImages).map((image) => (
          <img key={image.name} src={URL.createObjectURL(image)} alt="selected" className="w-full h-full object-cover" />
        ))}

        {/* Example of fixed images
        <img src="../Images/prod3.png" alt="fixed" className="w-full h-full object-cover" />
        <img src="../Images/prod4.png" alt="fixed" className="w-full h-full object-cover" />
        <img src="../Images/prod5.png" alt="fixed" className="w-full h-full object-cover" /> */}
      </div>

      {/* <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button> */}


      
    </form>
  );
};

export default UploadAndViewOtherImages;
