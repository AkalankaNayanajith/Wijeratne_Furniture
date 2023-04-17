import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import ImageSelectionForm from './ImageSelection/ImageSelectionForm';

function ShowBox() {
  const [showBox, setShowBox] = useState(false);

  const handleButtonClick = () => {
    setShowBox(!showBox);
  };

  return (
    <div className="p-4">
      <button
        className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={handleButtonClick}  >
        Table Edges <FontAwesomeIcon icon={faCaretDown} className={`transition-transform duration-300 transform ${showBox ? 'rotate-180' : ''}`} />
      </button>
      {showBox && (
        <div className=" rounded-lg  mt-4">
          <ImageSelectionForm/>
        </div>
      )}
    </div>
  );
}

export default ShowBox;
