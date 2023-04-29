import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";

function BotCollection() {
  const [botData, setBotData] = useState([]);
  const [armyData, setArmyData] = useState([]);

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

  const handleClick = (bot) => {
    if (!armyData.find(b => b.id === bot.id)) {
      setArmyData([...armyData, bot]);
    }
  };

  return (
    <>
      <YourBotArmy armyData={armyData} setArmyData={setArmyData}/>
      <div className ="bot-list">
        {botData.map((bot) => (
          <div key={bot.id} className="bot-container" onClick={() => handleClick(bot)}>
            <img src={bot.avatar_url} alt="Bot Avatar" />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <div className="bot-stats">
                <p>
                  {icons.health} {bot.health}
                </p>
                <p>
                  {icons.damage} {bot.damage}
                </p>
                <p>
                  {icons.armor} {bot.armor}
                </p>
              </div>
            <button className="big-red-button">x</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default BotCollection;