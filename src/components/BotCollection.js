import React, {useState, useEffect} from "react";

function BotCollection () {
    const [botData, setBotData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8001/bots')
        .then(res => res.json())
        .then(data => setBotData(data))
     })

}
export default BotCollection;