import React, { useState } from "react";

function ImageSelectionForm() {
  const [selectedDivs, setSelectedDivs] = useState([]);

  function handleDivClick(index) {
    if (selectedDivs.includes(index)) {
      setSelectedDivs(selectedDivs.filter(i => i !== index));
    } else {
      setSelectedDivs([...selectedDivs, index]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(selectedDivs);
    // Submit form data here
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black  overflow-hidden ${selectedDivs.includes(0) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(0)}>
          <img className="h-full w-full m-auto" src="../Images/Tables/Edge1.jpg" alt="Placeholder" />
        </div>
        <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(1) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(1)}>
          <img className="h-full w-full m-auto"  src="../Images/Tables/Edge2.jpg" alt="Placeholder" />
        </div>
        <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(2) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(2)}>
          <img className="h-full w-full m-auto"  src="../Images/Tables/Edge3.jpg" alt="Placeholder" />
        </div>
        <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black overflow-hidden items-center flex ${selectedDivs.includes(3) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(3)}>
          <img className="h-full w-full m-auto"   src="../Images/Tables/Edge4.jpg" alt="Placeholder" />
        </div>
        <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(4) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(4)}>
          <img className="h-full w-full m-auto" src="../Images/Tables/Edge5.jpg" alt="Placeholder" />
        </div>
        <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(5) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(5)}>
          <img className="h-full w-full m-auto"  src="../Images/Tables/Edge6.jpg" alt="Placeholder" />
        </div>
        <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(6) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(6)}>
          <img className="h-full w-full m-auto" src="../Images/Tables/Edge7.jpg" alt="Placeholder" />
        </div>
        <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(7) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(7)}>
          <img className="h-full w-full m-auto"  src="../Images/Tables/Edge8.jpg" alt="Placeholder" />
        </div>
        {/* <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(7) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(7)}>
          <img className="h-[90%] w-[90%] m-auto mt-1"  src="../Images/Tables/Edge8.jpg" alt="Placeholder" />
        </div> */}        
      </div>
    </form>
  );
}

export default ImageSelectionForm;
