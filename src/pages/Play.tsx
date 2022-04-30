import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel} from '@ionic/react';
import { currentGame, gameResult } from '../App';
import { useHistory } from 'react-router-dom';
import { useState } from 'react'; 

interface PlayProps {
    addGameResult: (r: gameResult) => void;
    currentGame: currentGame;
}

export const Play: React.FC<PlayProps> = ({
  addGameResult
  , currentGame
}) => {

  const history = useHistory();

  

  const [longestWord, setLongestWord] = useState(""); 
  const [highScore, setHighScore] = useState(0); 

  const endGame = (winningPlayer: string) => {

    console.log(currentGame); 

    // Add the new game result to the app data.
    addGameResult({
        start: currentGame.start
        , end: new Date().toISOString()
        , players: currentGame.player.map(x => ({
            name: x
            , order: 0
        }))
        , highestScoreWord: longestWord
        , highestScoreValue: highScore
    });

    // Navigate Home.
    history.push("/");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Play Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Play Game</IonTitle>
          </IonToolbar>

          
        </IonHeader>
        

          { currentGame.player.map(x => (
            <IonButton
              key={x}
              onClick={() => endGame(x)}
              >
              {x} Won
            </IonButton>
          ))}

        
      
        <IonItem>
            <IonLabel position="floating">
              Enter Longest Word
            </IonLabel>
           
            
            <IonInput 
              value={longestWord}
              onIonChange={(e) => setLongestWord((e.target as any).value)}
            >
            </IonInput>
            
            </IonItem>

            <IonItem>
            <IonLabel position="floating">
              Enter High Score
            </IonLabel>
           
            
            <IonInput 
              value={highScore}
              onIonChange={(e) => setHighScore((e.target as any).value)}
            >
            </IonInput>
            
            </IonItem>

            <IonButton
              onClick={() => history.push("/")}  
            >
              Quit
          </IonButton>

          { currentGame.word.map(y => (
            <p>
              {y}
            </p>
          ))}

            <h3>
              {longestWord}
            </h3>

            <h3>
              {highScore}
            </h3>
      </IonContent>
    </IonPage>
  );
};

export default Play;