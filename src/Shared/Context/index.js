import React, { useState } from "react";

export const Context = React.createContext("game");

const Provider = (props) => {
  const { children } = props;

  const [selectedGame, setSelectedGame] = useState(
    localStorage.getItem("selectedGame") || "all"
  );

  const onSetSelectedGame = ({ selectedGame }) => {
    localStorage.setItem("selectedGame", selectedGame);
    setSelectedGame(selectedGame);
  };

  return (
    <Context.Provider
      value={{
        selectedGame,
        onSetSelectedGame,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
