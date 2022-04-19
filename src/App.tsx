import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useState } from 'react'; 
import  Home  from './pages/Home';
import { Play } from './pages/Play'; 
import { Score } from './pages/Score'; 


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

interface player {
  name: string;
  order: number;
}

export interface gameResult {
  start: string;      // "2022-02-14T18:49:30"
  end: string;        // "2022-02-14T18:59:30"
  winner: string      // "Me"
  players: player[]   

  // tca-zombie-specific
  expansions?: any[]
  gameTurns?: any[];
}

export interface currentGame {
  start: string; 
  player: string[]; 
}

const game1: gameResult = {
  start: "2022-02-14T18:55:00"
  , end: "2022-02-14T19:00:00"
  , winner: "Me"
  , players: [{ name: "Me", order: 1 }, { name: "Jack", order: 2 }, { name: "Taylor", order: 3 }]
  , expansions: ["Santa", "Hunk/Hottie"]
  , gameTurns: [
      {
          turnNumber: 1
          , playerTurns: [
              {
                  player: "Me"
                  , start: "2022-02-14T18:55:00"
                  , end: "2022-02-14:18:55:10"
                  , startingScore: 0
                  , brains: 3
                  , endingScore: 3
                  , specialActions: [
                      {
                          dice: "Santa"
                          , action: "Helmet"
                          , value: 0
                      }
                      , {
                          dice: "Hunk"
                          , action: "Double Brains"
                          , value: 2

                      } 
                      , {
                          dice: "Hottie"
                          , action: "Rescue"
                          , value: -2
                      }
                  ]
              }
              , {
                  player: "Jack"
                  , start: "2022-02-14:18:55:10"
                  //, ...
                  
              }
          ]
      }
      //, {...}
  ]
};

const game2: gameResult = {
  start: "2022-02-14T19:05:00"
  , end: "2022-02-14T19:35:00"
  , winner: "Stephanie"
  , players: [{ name: "Me", order: 1 }, { name: "Stephanie", order: 2 }]
};

let gameResults: gameResult[] = [
  game1
  , game2
];

const getUniquePlayers = (games: gameResult[]) => (
  [...new Set(games.flatMap(x => x.players.map(y => y.name)))]);


const App: React.FC = () => {
  
  // App state as useState() until it gets unmanagable 
  const [results, setResults] = useState(gameResults); 

  const [currentGame, setCurrentGame] = useState<currentGame>({
    start: ""
    , player: []
  }); 


  const addGameResult = (singleGameResult: gameResult) => {
     setResults([
       ...results
         , singleGameResult
     ]);
  };
  
  
  return(
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/Home">
          <Home 
              gameResults={results}
          />
        </Route>
        <Route exact path="/Play">
          <Play 
            addGameResult={addGameResult}
            currentGame={currentGame}
            
          />
        </Route>
        <Route exact path="/Score">
          <Score 
            pastPlayers = {getUniquePlayers(results)}
            setCurrentGame={setCurrentGame}
          />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  );
};

export default App;
