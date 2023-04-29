import React from "react";

function YourBotArmy({ armyData, setArmyData }) {
    const icons = {
      health: "\u2764\ufe0f",
      damage: "\ud83d\udde1",
      armor: "\ud83e\udddf"
    };
  
    const handleReleaseBot = (botId) => {
        const newArmyData = armyData.filter((bot) => bot.id !== botId);
        setArmyData(newArmyData);
      };
    return (
      <div className="bot-army">        
        {armyData.map((bot) => (
          <div key={bot.id} className="bot-container" onClick={() => handleReleaseBot(bot.id)}>
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
export default YourBotArmy;