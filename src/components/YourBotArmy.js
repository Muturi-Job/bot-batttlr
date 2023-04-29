import React from "react";

function YourBotArmy({ armyData }) {
    const icons = {
      health: "\u2764\ufe0f",
      damage: "\ud83d\udde1",
      armor: "\ud83e\udddf"
    };
  
    return (
      <div className="bot-army">        
        {armyData.map((bot) => (
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
export default YourBotArmy;