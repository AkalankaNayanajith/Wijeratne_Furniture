import { useState, useEffect } from 'react';

function CountDownTimer() {
  const [hours, setHours] = useState(0);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    let interval;
    if (hours > 0) {
      const endTime = new Date();
      endTime.setHours(endTime.getHours() + hours);
      interval = setInterval(() => {
        const remainingTime = endTime.getTime() - new Date().getTime();
        if (remainingTime <= 0) {
          setCountdown('0:00:00');
          clearInterval(interval);
        } else {
          const hoursRemaining = Math.floor(remainingTime / 3600000);
          const minutesRemaining = Math.floor((remainingTime % 3600000) / 60000);
          const secondsRemaining = Math.floor((remainingTime % 60000) / 1000);
          const hoursString = hoursRemaining < 10 ? `0${hoursRemaining}` : `${hoursRemaining}`;
          const minutesString = minutesRemaining < 10 ? `0${minutesRemaining}` : `${minutesRemaining}`;
          const secondsString = secondsRemaining < 10 ? `0${secondsRemaining}` : `${secondsRemaining}`;
          setCountdown(`${hoursString}    :    ${minutesString}   :   ${secondsString}`);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [hours]);

  const handleInputChange = (e) => {
    const inputHours = parseInt(e.target.value);
    setHours(inputHours);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <label htmlFor="hours" className="text-lg mb-2">
        Enter number of hours:
      </label>
      <input
        type="number"
        id="hours"
        name="hours"
        min="0"
        className="border rounded px-3 py-2 mb-4"
        value={hours}
        onChange={handleInputChange} />
      {countdown !== '' && (
        <div className="text-center">
          <h2 className="text-3xl font-bold font-sans mb-4">{countdown}</h2>
        </div>
      )}
    </div>
  );
}

export default CountDownTimer;
