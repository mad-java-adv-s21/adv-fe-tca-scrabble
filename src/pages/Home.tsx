import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonItem, IonText, IonThumbnail, IonLabel } from '@ionic/react';
import './Home.css';
import { gameResult } from '../App'; 
import { useHistory } from 'react-router-dom'; 


interface HomeProps {
  gameResults: gameResult[];
  pastPlayers: string[]; 
}

const calculateHighestScoringWord = (gameResults : gameResult[]) => {
    const ranked = [
      ...gameResults
    ].sort((a,b) => a.highestScoreValue < b.highestScoreValue ? 1 : -1);

    return { 
      word: ranked[0].highestScoreWord
      , value: ranked[0].highestScoreValue
    }
}; 

const calculateLeaderBoard = (p: string[], r: gameResult[]) => {
    
  const lb = p.map(x => {
    
    const gamesThisPlayerHasPlayedIn = r.filter(y => y.players.some(z => z.name == x));
    const gamesThisPlayerHasWon = gamesThisPlayerHasPlayedIn.filter(y => y.winner == x);


    return {
      name: x
      , wins: gamesThisPlayerHasWon.length
      , losses: gamesThisPlayerHasPlayedIn.length - gamesThisPlayerHasWon.length
      , winningPercentage: (gamesThisPlayerHasWon.length / gamesThisPlayerHasPlayedIn.length).toFixed(2)
    };
  })
   
  

    console.log("in leaderboard", lb); 
}; 






const Home: React.FC<HomeProps> = ({
  gameResults
  , pastPlayers}) => {

  const history = useHistory();
  
  const hw = calculateHighestScoringWord(gameResults);

  const lb = calculateLeaderBoard(pastPlayers, gameResults); 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scrabble</IonTitle>
         
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonImg src="assets/scrabbleLogo.jpeg"></IonImg>
      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
            
          </IonToolbar>
        </IonHeader>
       <IonButton
           
            onClick={() => history.push("/score")}
            >
            Play
       </IonButton>

       

       <h3>
            Total Games Played: {gameResults.length}
            
       </h3>
       <h3>
            Highest Scoring Word: {hw.word}
       </h3>

       <h3>
            Highest Scoring Value: {hw.value}
       </h3>
    
       
      </IonContent>
    </IonPage> 
  );
  
};

export default Home;
