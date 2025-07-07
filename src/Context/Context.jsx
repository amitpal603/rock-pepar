import React, { children, createContext, useState } from 'react'

export const useTodo = createContext()
 export function Context({children}) {

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

  const comRandom = () => Math.floor(Math.random() * 3);

  const HandleClick = (id) => {
    const comChoise = comRandom();
    setUserInx(id);
    setComInx(comChoise);
    checkWinner(id, comChoise);
  };

  const checkWinner = (user, computer) => {
    if (user === computer) {
      setMessage("Match is Draw!");
    } else if (
      (user === 0 && computer === 2) ||
      (user === 1 && computer === 0) ||
      (user === 2 && computer === 1)
    ) {
      setUserScore((pre) => pre + 1);
      setMessage("You Win!");
    } else {
      setComScore((pre) => pre + 1);
      setMessage("Computer Wins!");
    }
  };

  const NewGame = () => {
    setUserInx(null);
    setComInx(null);
    setMessage("");
    setComScore(0);
    setUserScore(0);
  };

  const value = {
    NewGame,HandleClick,choices,userScore,comScore,userInx,comInx,message
  }
  return <useTodo.Provider value={value}>{children}</useTodo.Provider>
}

export default Context
