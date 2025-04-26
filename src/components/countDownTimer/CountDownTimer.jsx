import React, { useEffect, useState } from 'react'

const CountDownTimer = () => {
  const [minutes, setMinutes] = useState(0); // Stores the user-entered minutes for the timer's initial duration.
  const [seconds, setSeconds] = useState(0); // Stores the user-entered seconds for the timer's initial duration.
  const [isRunning, setIsRunning] = useState(false); // Tracks whether the timer is actively counting down.
  const [timeLeft, setTimeLeft] = useState(0); // Stores the remaining time in seconds as the timer counts down.

  // Convert input minutes and seconds to total seconds
  const handleStart = () => {
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    }
  };

  // Pause the timer
  const handlePause = () => {
    setIsRunning(false);
  };

  // Resume the timer
  const handleResume = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  // Reset the timer
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setMinutes(0);
    setSeconds(0);
  };

  // Timer logic
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Format time for display
  const displayMinutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const displaySeconds = (timeLeft % 60).toString().padStart(2, "0");
  return (
    <section className='bg-[#282C34] h-screen'>
      <div className="">
        <div className="flex flex-col items-center justify-center pt-32">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">
              Countdown Timer
            </h1>

            {/* Input Fields */}
            {!isRunning && timeLeft === 0 && (
              <div className="flex space-x-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Minutes
                  </label>
                  <input
                    type="number"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    className="mt-1 p-2 w-20 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Seconds
                  </label>
                  <input
                    type="number"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    className="mt-1 p-2 w-20 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="59"
                  />
                </div>
              </div>
            )}

            {/* Timer Display */}
            <div className="text-4xl font-mono text-center mb-6">
              {displayMinutes}:{displaySeconds}
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              {timeLeft === 0 && !isRunning && (
                <button
                  onClick={handleStart}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Start
                </button>
              )}
              {isRunning && (
                <button
                  onClick={handlePause}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Pause
                </button>
              )}
              {!isRunning && timeLeft > 0 && (
                <button
                  onClick={handleResume}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Resume
                </button>
              )}
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountDownTimer