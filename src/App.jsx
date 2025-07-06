import React, { useEffect, useState } from 'react'

function App() {
  const [userScore, setUserScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  const [userInx, setUserInx] = useState(null);
  const [comInx, setComInx] = useState(null);
  const [message, setMessage] = useState("");

  const choices = [
    { src: "public/Distop img/rock.png", alt: "rock" },
    { src: "public/Distop img/paper.png", alt: "paper" },
    { src: "public/Distop img/scissors.png", alt: "scissors" },
  ];

 const comRandom = () => {
  return Math.floor(Math.random()*3)
 }

 const HandleClick = (id) =>{
  const comChoise = comRandom()
  setUserInx(id)
  setComInx(comChoise)
  checkWinner(id,comChoise)
 }

 const checkWinner = (user,computer) =>{
  if(user === computer){
    setMessage("Match will be Drow..!")
  }
  else if(
    (user === 0 && computer === 2) ||
    (user === 1 && computer === 0) ||
    (user === 2 && computer === 1)
  )
  {
    setUserScore((pre) => pre+1)
    setMessage("You Win..!")
  }
  else {
    setComScore((pre) => pre+1)
    setMessage("Computer Win..!")
  }
 }

 const NewGame = () =>{
  setUserInx(null)
  setComInx(null)
  setMessage("")
  setComScore(0)
  setUserScore(0)
 }
 console.log("user",userInx);
 console.log("computer",comInx);
 console.log(message);
 
 
 
  return (
    <div>
      <div className="flex justify-center flex-col items-center gap-15">
        <h1 className="text-3xl p-1 shadow-pink-500 rounded-md shadow-lg h-20 w-90 flex justify-center items-center mt-9 font-bold font-mono text-center bg-pink-400">
          Rock Paper Scissors
        </h1>

        <div className="flex gap-10">
          {choices.map((link, index) => (
            <img
              key={index}
              onClick={() => HandleClick(index)}
              className="h-24 w-24 rounded-full object-cover transition-transform hover:scale-95 cursor-pointer"
              src={link.src}
              alt={link.alt}
            />
          ))}
        </div>

        <div className="flex gap-20">
          <div className="flex gap-4 justify-center items-center">
            <p className="font-bold text-2xl">User Score:</p>
            <p className="font-bold px-6 py-2 bg-purple-400 rounded-md shadow-purple-500 shadow-lg">
              {userScore}
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <p className="font-bold text-2xl">Computer Score:</p>
            <p className="font-bold px-6 py-2 bg-purple-400 rounded-md shadow-purple-500 shadow-lg">
              {comScore}
            </p>
          </div>
        </div>

        <button
          onClick={NewGame}
          className="px-4 py-3 bg-purple-400 rounded-md font-bold cursor-pointer transition-transform hover:scale-95 shadow-lg shadow-purple-500"
        >
          New Game
        </button>

        <div className="flex flex-col items-center gap-4">
          <p className="font-bold bg-purple-500 px-6 py-3 rounded-md">
            {message || "Make your move!"}
          </p>
          <div className="flex gap-6">
            {userInx !== null && (
              <div className="flex flex-col items-center gap-5">
                <p className="font-bold">You Chose:</p>
                <img
                  src={choices[userInx].src}
                  alt="Your Choice"
                  className="h-16 w-16 object-cover rounded-full"
                />
              </div>
            )}
            {comInx !== null && (
              <div className="flex flex-col items-center gap-5">
                <p className="font-bold">Computer Chose:</p>
                <img
                  src={choices[comInx].src}
                  alt="Computer Choice"
                  className="h-16 w-16 object-cover rounded-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
