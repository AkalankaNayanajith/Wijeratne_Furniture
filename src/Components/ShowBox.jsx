import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function ShowBox() {
  const [showBox, setShowBox] = useState(false);

  const handleButtonClick = () => {
    setShowBox(!showBox);
  };

  return (
    <div className="p-4">
      <button
        className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={handleButtonClick}
      >
        Show <FontAwesomeIcon icon={faCaretDown} className={`transition-transform duration-300 transform ${showBox ? 'rotate-180' : ''}`} />
      </button>
      {showBox && (
        <div className="border border-black w-96 h-20 mt-4"></div>
      )}
    </div>
  );
}

export default ShowBox;
