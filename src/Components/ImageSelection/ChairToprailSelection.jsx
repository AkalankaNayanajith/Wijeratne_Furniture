import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function ChairToprailSelection() {
  const [showBox, setShowBox] = useState(false);
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
  

  const handleButtonClick = () => {
    setShowBox(!showBox);
  };

  return (
    <div className="p-4">
      <button
        className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={handleButtonClick}  >
        Top Rail <FontAwesomeIcon icon={faCaretDown} className={`transition-transform duration-300 transform ${showBox ? 'rotate-180' : ''}`} />
      </button>
      
      {showBox && (
       <div className=" rounded-lg  mt-4 border-2 border-gray-300">
       <form onSubmit={handleSubmit}>
   <div className="flex flex-wrap container w-1200px">
     <div className={`w-1/6 h-auto rounded-lg m-1 border-2 border-black  overflow-hidden ${selectedDivs.includes(0) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(0)}>
       <img className="bg-center bg-contain " src="../Images/Chairs/toprail1.jpg" alt="Placeholder" />
     </div>
     <div className={`w-1/6 h-auto rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(1) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(1)}>
       <img className=" bg-center bg-contain"  src="../Images/Chairs/toprail2.jpg" alt="Placeholder" />
     </div>
     <div className={`w-1/6 h-auto rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(2) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(2)}>
       <img className="bg-center bg-contain "  src="../Images/Chairs/toprail3.jpg" alt="Placeholder" />
     </div>
     <div className={`w-1/6 h-auto rounded-lg m-1 border-2 border-black overflow-hidden items-center flex ${selectedDivs.includes(3) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(3)}>
       <img className="bg-center bg-contain"   src="../Images/Chairs/toprail4.jpg" alt="Placeholder" />
     </div>
     
     {/* <div className={`w-1/6 h-auto rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(9) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(9)}>
       <img className="bg-center bg-contain" src="../Images/Chairs/leg10.jpg" alt="Placeholder" />
     </div> */}
     
        
        {/* <div className={`w-1/6 h-56 rounded-lg m-1 border-2 border-black overflow-hidden ${selectedDivs.includes(7) ? "border-4 border-blue-500" : ""}`} onClick={() => handleDivClick(7)}>
          <img className="h-[90%] w-[90%] m-auto mt-1"  src="../Images/Tables/Edge8.jpg" alt="Placeholder" />
        </div> */}        
      </div>
    </form>    
    <button 
      className='mt-6 px-6 py-3 rounded-lg text-sm border-2 border-white bg-cyan-500  hover:bg-cyan-800 text-white'
      type="submit" 
      onClick={handleSubmit}> Save Style </button>
        </div>
      )}
    </div>
  );
}

export default ChairToprailSelection;
