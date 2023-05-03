Bot Battlr
Welcome to Bot Battlr, the one and only spot in the known universe where you
can custom build your own Bot Army! This is a React application that displays a
list of available bots, among other features.

Getting Started
To get started with the project, follow the instructions below:

Clone the repository to your local machine:
git clone https://github.com/your-username/bot-battlr.git
cd bot-battlr

Install the dependencies:
npm install

Start the development server:
npm start

In another terminal window, run the following command to start the backend server:
json-server --watch db.json

This will start the backend server on http://localhost:8001.

Test the server by visiting this route in the browser: http://localhost:8001/bots.

Functionality
This application allows you to:

See profiles of all bots rendered in BotCollection.
Add an individual bot to your army by clicking on it. The selected bot should
render in the YourBotArmy component. The bot can be enlisted only once.
The bot does not disappear from the BotCollection.
Release a bot from your army by clicking on it. The bot disappears from the
YourBotArmy component.
Discharge a bot from their service forever, by clicking the red button marked
"x", which would delete the bot both from the backend and from the
YourBotArmy on the frontend.

Authoir : Job Muturi