import React, { children, createContext, useState } from 'react'

export const useTodo = createContext()
 export function Context({children}) {

     const [userScore, setUserScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  const [userInx, setUserInx] = useState(null);
  const [comInx, setComInx] = useState(null);
  const [message, setMessage] = useState("");

  const choices = [
    { src: "https://tse2.mm.bing.net/th/id/OIP.NMhMlw1aue9vzUepxWeCpAHaEK?pid=Api&P=0&h=180", alt: "rock" },
    { src: "https://tse4.mm.bing.net/th/id/OIP.hZ19DgfkM-W7JY_9A1YFugHaEK?pid=Api&P=0&h=180", alt: "paper" },
    { src: "https://chandanbca143.github.io/Rock-paper-scissor/scissors.png", alt: "scissors" },
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
