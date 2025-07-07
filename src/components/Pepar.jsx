import React, { useContext } from 'react';
import { useTodo } from '../Context/Context';

function Pepar() {
  const { NewGame, HandleClick, choices, userScore, comScore, userInx, comInx, message } = useContext(useTodo);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex flex-col items-center justify-start p-4 gap-8">
      
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-white bg-pink-500 shadow-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl mt-6 w-full max-w-xs sm:max-w-md">
        Rock Paper Scissors
      </h1>

      <div className="flex gap-5 sm:gap-8 flex-wrap justify-center">
        {choices.map((link, index) => (
          <img
            key={index}
            onClick={() => HandleClick(index)}
            className="h-20 w-20 sm:h-28 sm:w-28 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform shadow-md"
            src={link.src}
            alt={link.alt}
          />
        ))}
      </div>

      <div className="flex gap-8 flex-wrap justify-center items-center mt-4">
        
        <div className="flex flex-col items-center gap-1">
          <p className="text-lg sm:text-2xl font-semibold text-purple-700">User Score</p>
          <p className="text-2xl sm:text-3xl bg-purple-400 text-white px-5 py-2 rounded-xl shadow-md">
            {userScore}
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="text-lg sm:text-2xl font-semibold text-purple-700">Computer Score</p>
          <p className="text-2xl sm:text-3xl bg-purple-400 text-white px-5 py-2 rounded-xl shadow-md">
            {comScore}
          </p>
        </div>

      </div>

      <button
        onClick={NewGame}
        className="px-5 sm:px-6 py-2 sm:py-3 bg-purple-500 text-white font-semibold rounded-xl shadow-md hover:bg-purple-600 transition-colors"
      >
        New Game
      </button>

      <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-xs sm:max-w-md">
        
        <p className="text-base sm:text-xl font-bold bg-purple-500 text-white px-6 sm:px-8 py-3 rounded-2xl shadow-md text-center">
          {message || "Make your move!"}
        </p>

        <div className="flex gap-8 flex-wrap justify-center items-center">
          
          {userInx !== null && (
            <div className="flex flex-col items-center gap-2">
              <p className="font-medium sm:font-semibold text-sm sm:text-lg">You Chose:</p>
              <img
                src={choices[userInx].src}
                alt="Your Choice"
                className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full shadow"
              />
            </div>
          )}

          {comInx !== null && (
            <div className="flex flex-col items-center gap-2">
              <p className="font-medium sm:font-semibold text-sm sm:text-lg">Computer Chose:</p>
              <img
                src={choices[comInx].src}
                alt="Computer Choice"
                className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full shadow"
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Pepar;
