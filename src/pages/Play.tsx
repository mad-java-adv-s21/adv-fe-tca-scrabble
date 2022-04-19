import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { currentGame, gameResult } from '../App';
import { useHistory } from 'react-router-dom';

interface PlayProps {
    addGameResult: (r: gameResult) => void;
    currentGame: currentGame;
}

export const Play: React.FC<PlayProps> = ({
  addGameResult
  , currentGame
}) => {

  const history = useHistory();

  const endGame = (winningPlayer: string) => {

    // Add the new game result to the app data.

    const mappedPlayers = currentGame.player.map(x => ({
      name: x 
      , order: 0
    }));
    console.log(mappedPlayers);

    addGameResult({
        start: currentGame.start
        , end: new Date().toISOString()
        , players: mappedPlayers
        , winner: winningPlayer
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
            onClick={() => endGame}
            
          >
            {x} Won
          </IonButton>
        ))}
        <IonButton
            onClick={() => history.push("/")}
        >
          Done
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Play;