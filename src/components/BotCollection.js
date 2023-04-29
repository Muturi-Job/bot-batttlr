import React, { useState, useEffect } from "react";

function BotCollection() {
  const [botData, setBotData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => {
        setBotData(data);
        console.log(data);
      });
  }, []);

  const icons = {
    health: "\u2764\ufe0f",
    damage: "\ud83d\udde1",
    armor: "\ud83e\udddf"
  };

  return (
    <div className ="bot-list">
      {botData.map((bot) => (
        <div key={bot.id} className="bot-container">
          <img src={bot.avatar_url} alt="Bot Avatar" />
          <h3>{bot.name}</h3>
          <p>{bot.catchphrase}</p>
          <p>{icons.health} {bot.health}</p>
          <p>{icons.damage} {bot.damage}</p>
          <p>{icons.armor} {bot.armor}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;